import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises'
import { dirname, relative, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const docsRoot = resolve(scriptDir, '../src/content/docs')
const frontendRoot = resolve(scriptDir, '../../asterisksuite_frontend')
const outputPath = resolve(frontendRoot, 'public/help-documents-index.json')

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const nested = await Promise.all(entries.map(async (entry) => {
    const path = resolve(directory, entry.name)
    if (entry.isDirectory()) return walk(path)
    return /\.(md|mdx)$/.test(entry.name) ? [path] : []
  }))
  return nested.flat()
}

function frontmatterValue(frontmatter, key) {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*(.*)$`, 'm'))
  return match?.[1]?.trim().replace(/^['"]|['"]$/g, '') ?? ''
}

function markdownSections(body, fallbackTitle) {
  const cleaned = body
    .replace(/^\s*import\s+.+$/gm, '')
    .replace(/<!--([\s\S]*?)-->/g, '')
    .replace(/\{\/\*([\s\S]*?)\*\/\}/g, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/:::\w+(?:\[([^\]]+)\])?/g, (_match, label) => label ? `\n${label}\n` : '\n')
    .replace(/<\/?[A-Z][^>]*>/g, '')
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[`*_~]/g, '')
    .replace(/\{[^{}]*\}/g, ' ')
    .replace(/[ \t]+/g, ' ')
    .trim()

  const sections = []
  let heading = fallbackTitle
  let lines = []
  const flush = () => {
    const text = lines.join(' ').replace(/\s+/g, ' ').trim()
    if (text.length >= 35) sections.push({ heading, text: text.slice(0, 1800) })
    lines = []
  }

  for (const line of cleaned.split(/\r?\n/)) {
    const headingMatch = line.match(/^#{1,6}\s+(.+)$/)
    if (headingMatch) {
      flush()
      heading = headingMatch[1].replace(/\s+#*$/, '').trim()
    } else if (!line.trim()) {
      flush()
    } else {
      lines.push(line.replace(/^\s*(?:[-*+]\s+|\d+[.)]\s+)/, ''))
    }
  }
  flush()
  return sections
}

const files = (await walk(docsRoot)).sort()
const articles = []

for (const filePath of files) {
  const source = await readFile(filePath, 'utf8')
  const frontmatterMatch = source.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/)
  const frontmatter = frontmatterMatch?.[1] ?? ''
  const body = frontmatterMatch ? source.slice(frontmatterMatch[0].length) : source
  const title = frontmatterValue(frontmatter, 'title')
  if (!title) continue

  const relativePath = relative(docsRoot, filePath).split(sep).join('/')
  const slug = relativePath
    .replace(/\.(md|mdx)$/, '')
    .replace(/(^|\/)index$/, '')
  const sections = markdownSections(body, title)
  articles.push({
    slug,
    title,
    description: frontmatterValue(frontmatter, 'description'),
    sections
  })
}

await mkdir(dirname(outputPath), { recursive: true })
await writeFile(outputPath, `${JSON.stringify({ articles }, null, 2)}\n`, 'utf8')
console.log(`Generado ${relative(frontendRoot, outputPath)} con ${articles.length} artículos.`)
