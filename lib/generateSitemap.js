// import { globby } from 'globby';
import blogConfig from '../blog.config';

const fs = require('fs');
const prettier = require('prettier');

const fg = require('fast-glob')

async function generateSitemap() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  const pages = await fg([
    'posts/**/*{.md,.json}',
    'stories/**/*{.md,.json}',
    '!drafts/**/*{.md,.json}'
  ]);

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
              <loc>${blogConfig.siteMeta.siteURL}</loc>
            </url>
            ${pages
              .map((page) => {
                const path = page
                  .replace('.json', '')
                  .replace('.md', '')
                  .replace('content/', '')
                  .replace('blog/', '');
                const route = path === '/index' ? '' : path;
                return `
                <url>
                <loc>${`${blogConfig.siteMeta.siteURL}/${route}`}</loc>
                </url>`;
              })
              .join('')}
            
        </urlset>
    `;
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  });

  fs.writeFileSync(`public/sitemaps/sitemap.xml`, formatted);
}

export default generateSitemap;
