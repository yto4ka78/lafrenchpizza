import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

const SITE_URL = process.env.VITE_SITE_URL || 'https://lafrenchpizza.fr'
const GA_ID = process.env.VITE_GA_MEASUREMENT_ID
const GOOGLE_VERIFY = process.env.VITE_GOOGLE_SITE_VERIFICATION
const BING_VERIFY = process.env.VITE_BING_SITE_VERIFICATION

function googleToolsPlugin() {
  return {
    name: 'google-tools',
    transformIndexHtml(html) {
      let result = html
      if (GOOGLE_VERIFY) {
        result = result.replace(
          '<!-- GOOGLE_SEARCH_CONSOLE -->',
          `<meta name="google-site-verification" content="${GOOGLE_VERIFY}" />`
        )
      } else {
        result = result.replace(/ *<!-- GOOGLE_SEARCH_CONSOLE -->\n?/g, '')
      }
      if (BING_VERIFY) {
        result = result.replace(
          '<!-- BING_WEBMASTER -->',
          `<meta name="msvalidate.01" content="${BING_VERIFY}" />`
        )
      } else {
        result = result.replace(/ *<!-- BING_WEBMASTER -->\n?/g, '')
      }
      if (GA_ID) {
        const gaScript = `    <script async src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
    </script>`
        result = result.replace('<!-- GOOGLE_ANALYTICS -->', gaScript)
      } else {
        result = result.replace(/ *<!-- GOOGLE_ANALYTICS -->\n?/g, '')
      }
      return result
    },
  }
}

export default defineConfig({
  plugins: [
    googleToolsPlugin(),
    react(),
    Sitemap({
      hostname: SITE_URL,
      dynamicRoutes: ['/menu', '/about', '/faq', '/contact'],
      changefreq: 'weekly',
      priority: { '/': 1, '/menu': 0.9, '/about': 0.8, '/contact': 0.8 },
      robots: [
        { userAgent: '*', allow: ['/', '/menu', '/about', '/faq', '/contact'] },
      ],
    }),
  ],
})
