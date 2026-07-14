import fs from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const base = 'https://squad.csskey.com'
const today = new Date().toISOString().split('T')[0]

// Read squad roles
const rolesData = fs.readFileSync(resolve(root, 'src', 'data', 'squadRoles.ts'), 'utf8')
const roleSlugs = [...rolesData.matchAll(/slug: "([a-z0-9-]+)"/g)].map(m => m[1])

// Read blog
const blogData = fs.readFileSync(resolve(root, 'src', 'data', 'blog.ts'), 'utf8')
const blogSlugs = [...new Set([...blogData.matchAll(/slug: "([a-z0-9-]+)"/g)].map(m => m[1]))]

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
const add = (p, pri) => { xml += `  <url><loc>${base}${p}</loc><lastmod>${today}</lastmod><priority>${pri}</priority></url>\n` }

// Static pages
add('/', 1.0)
add('/roles', 0.9)
add('/metrics', 0.8)
add('/blog', 0.8)
add('/about', 0.5)
add('/privacy', 0.3)
add('/terms', 0.3)
add('/contact', 0.5)

// Dynamic pages
for (const slug of roleSlugs) add(`/roles/${slug}`, 0.8)
for (const slug of blogSlugs) add(`/blog/${slug}`, 0.7)

xml += '</urlset>\n'

fs.writeFileSync(resolve(root, 'public', 'sitemap.xml'), xml, 'utf8')
try { fs.writeFileSync(resolve(root, 'dist', 'sitemap.xml'), xml, 'utf8') } catch {}
console.log(`Sitemap: ${8 + roleSlugs.length + blogSlugs.length} URLs (${roleSlugs.length} roles, ${blogSlugs.length} blog)`)
