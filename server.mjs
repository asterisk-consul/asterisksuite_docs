import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { join, extname } from 'node:path'

const root = join(process.cwd(), 'dist')
const port = Number(process.env.PORT) || 3000
const host = process.env.HOST || '0.0.0.0'

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.wasm': 'application/wasm'
}

function safeRel(url) {
  const pathname = decodeURIComponent((url || '/').split('?')[0])
  return pathname
    .replace(/\\/g, '/')
    .split('/')
    .filter((s) => s && s !== '..')
    .join('/')
}

async function isDir(p) {
  try { return (await stat(p)).isDirectory() } catch { return false }
}

async function resolveFile(url) {
  const rel = safeRel(url)
  let file = join(root, rel)
  if (await isDir(file)) file = join(file, 'index.html')
  return file
}

async function readWithFallback(file) {
  try {
    return { body: await readFile(file), status: 200 }
  } catch {}
  if (!extname(file)) {
    try {
      const alt = file + '.html'
      return { body: await readFile(alt), status: 200, file: alt }
    } catch {}
  }
  try {
    return { body: await readFile(join(root, '404.html')), status: 404 }
  } catch {
    return { body: Buffer.from('404 Not Found'), status: 404 }
  }
}

createServer(async (req, res) => {
  try {
    const file = await resolveFile(req.url)
    const result = await readWithFallback(file)
    const ext = extname(result.file || file)
    const headers = { 'Content-Type': TYPES[ext] || 'application/octet-stream' }

    const url = req.url || '/'
    if (url.startsWith('/_astro/')) {
      headers['Cache-Control'] = 'public, max-age=31536000, immutable'
    } else if (/\.(woff2?|png|jpe?g|webp|svg|ico|css|js)$/.test(url)) {
      headers['Cache-Control'] = 'public, max-age=2592000'
    }

    res.writeHead(result.status, headers)
    res.end(result.body)
  } catch {
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('Internal Server Error')
  }
}).listen(port, host, () => {
  console.log(`Asterisk Suite docs en http://${host}:${port}`)
})
