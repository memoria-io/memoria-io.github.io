import fs from 'fs'
import path from 'path'
import { marked } from 'marked'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Read config
const config = JSON.parse(fs.readFileSync('public/config.json', 'utf8'))

// Get the actual asset filenames from dist
const getAssetFiles = () => {
  const distDir = 'dist'
  const assetsDir = path.join(distDir, 'assets')
  
  if (!fs.existsSync(assetsDir)) {
    console.error('Assets directory not found. Run "npm run build" first.')
    process.exit(1)
  }
  
  const files = fs.readdirSync(assetsDir)
  const cssFile = files.find(f => f.endsWith('.css'))
  const jsFile = files.find(f => f.endsWith('.js'))
  
  return { cssFile, jsFile }
}

// HTML template
const createHTMLPage = (title, content, meta = {}) => {
  const { cssFile, jsFile } = getAssetFiles()
  const metaTags = Object.entries(meta)
    .map(([name, content]) => `<meta name="${name}" content="${content}">`)
    .join('\n    ')

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - Memoria IO</title>
    <meta name="description" content="${meta.description || ''}">
    ${metaTags}
    <link rel="stylesheet" href="/assets/${cssFile}">
    <script type="module" src="/assets/${jsFile}"></script>
</head>
<body>
    <div id="app">
        <header class="flex justify-center whitespace-nowrap">
            <div class="flex w-full max-w-[1200px] items-center justify-between py-5">
                <div class="flex items-center gap-4 text-[#101418]">
                    <a href="/">
                        <img src="/src/assets/images/logo.png" alt="Memoria IO Logo" class="h-10 w-auto">
                    </a>
                </div>
                <div class="flex flex-1 justify-end gap-8">
                    <nav class="flex items-center gap-14">
                        <a href="/" class="relative text-[#101418] text-sm font-medium leading-normal hover:text-blue-500 transition-colors">Home</a>
                        <a href="/products" class="relative text-[#101418] text-sm font-medium leading-normal hover:text-blue-500 transition-colors">Products</a>
                        <a href="/engineering" class="relative text-[#101418] text-sm font-medium leading-normal hover:text-blue-500 transition-colors">Engineering</a>
                        <a href="/blog" class="relative text-[#101418] text-sm font-medium leading-normal hover:text-blue-500 transition-colors">Blog</a>
                        <a href="/about" class="relative text-[#101418] text-sm font-medium leading-normal hover:text-blue-500 transition-colors">About</a>
                    </nav>
                    <div class="flex gap-2">
                        <a href="/contact" class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#eaedf1] text-[#101418] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#dde1e6] transition-colors">
                            <span class="truncate">Contact us</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        
        <main class="px-40 flex flex-1 justify-center py-5">
            <div class="layout-content-container flex flex-col max-w-[1200px] flex-1">
                <div class="prose dark:prose-invert max-w-none">
                    ${content}
                </div>
            </div>
        </main>
        
        <footer class="bg-[#101418] text-white py-12">
            <div class="max-w-[1200px] mx-auto px-40">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 class="text-lg font-semibold mb-4">Memoria IO</h3>
                        <p class="text-gray-300">Building scalable, maintainable systems for modern businesses.</p>
                    </div>
                    <div>
                        <h4 class="font-semibold mb-4">Services</h4>
                        <ul class="space-y-2 text-gray-300">
                            <li><a href="/products" class="hover:text-white">Products</a></li>
                            <li><a href="/engineering" class="hover:text-white">Engineering</a></li>
                            <li><a href="/blog" class="hover:text-white">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-semibold mb-4">Company</h4>
                        <ul class="space-y-2 text-gray-300">
                            <li><a href="/about" class="hover:text-white">About</a></li>
                            <li><a href="/contact" class="hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-semibold mb-4">Legal</h4>
                        <ul class="space-y-2 text-gray-300">
                            <li><a href="/privacy-policy" class="hover:text-white">Privacy Policy</a></li>
                            <li><a href="/terms-of-service" class="hover:text-white">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
                    <p>&copy; 2024 Memoria IO. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </div>
</body>
</html>`
}

// Generate product pages
const generateProductPages = () => {
  config.products.forEach(product => {
    const markdownPath = path.join('public', product.filePath)
    const markdown = fs.readFileSync(markdownPath, 'utf8')
    const html = marked(markdown)
    
    const slug = product.filePath.replace('products/', '').replace('.md', '')
    const outputPath = path.join('dist', 'products', `${slug}.html`)
    
    // Ensure directory exists
    fs.mkdirSync(path.dirname(outputPath), { recursive: true })
    
    const pageHTML = createHTMLPage(product.title, html, {
      description: product.excerpt || `Learn more about ${product.title}`,
      'og:title': product.title,
      'og:type': 'article',
      'article:published_time': product.lastUpdated
    })
    
    fs.writeFileSync(outputPath, pageHTML)
    console.log(`Generated: ${outputPath}`)
  })
}

// Generate blog pages
const generateBlogPages = () => {
  config.blogPosts.forEach(post => {
    const markdownPath = path.join('public', post.filePath)
    const markdown = fs.readFileSync(markdownPath, 'utf8')
    const html = marked(markdown)
    
    const slug = post.filePath.replace('blog/', '').replace('.md', '')
    const outputPath = path.join('dist', 'blog', `${slug}.html`)
    
    // Ensure directory exists
    fs.mkdirSync(path.dirname(outputPath), { recursive: true })
    
    const pageHTML = createHTMLPage(post.title, html, {
      description: post.excerpt || `Read our latest article: ${post.title}`,
      'og:title': post.title,
      'og:type': 'article',
      'article:published_time': post.lastUpdated
    })
    
    fs.writeFileSync(outputPath, pageHTML)
    console.log(`Generated: ${outputPath}`)
  })
}

// Generate case study pages
const generateCaseStudyPages = () => {
  config.caseStudies.forEach(study => {
    const markdownPath = path.join('public', study.filePath)
    const markdown = fs.readFileSync(markdownPath, 'utf8')
    const html = marked(markdown)
    
    const outputPath = path.join('dist', 'engineering', `${study.id}.html`)
    
    // Ensure directory exists
    fs.mkdirSync(path.dirname(outputPath), { recursive: true })
    
    const pageHTML = createHTMLPage(study.title, html, {
      description: study.excerpt,
      'og:title': study.title,
      'og:type': 'article'
    })
    
    fs.writeFileSync(outputPath, pageHTML)
    console.log(`Generated: ${outputPath}`)
  })
}

// Main execution
console.log('Generating static pages...')
generateProductPages()
generateBlogPages()
generateCaseStudyPages()
console.log('Static pages generated successfully!') 