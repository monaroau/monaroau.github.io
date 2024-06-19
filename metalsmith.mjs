import { fileURLToPath } from 'node:url'
import { dirname } from 'path'
import Metalsmith from 'metalsmith'
import collections from '@metalsmith/collections'
import layouts from '@metalsmith/layouts'
import markdown from '@metalsmith/markdown'

const __dirname = dirname(new URL(import.meta.url).pathname)
const t1 = performance.now()

Metalsmith(__dirname)         // parent directory of this file
  .source('./src')            // source directory
  .destination('./docs')     // destination directory
  .clean(true)                // clean destination before
  .env({                      // pass NODE_ENV & other environment variables
    DEBUG: true,
    NODE_ENV: process.env.NODE_ENV,
    DEBUG: '*metalsmith*'
  })
  .metadata({
    sitename: "My life and times",
    siteurl: "https://monaroau.github.io/",
    description: "It's about me.",
    generatorname: "Metalsmith",
    generatorurl: "https://metalsmith.io/"
  })
  .use(markdown())
  .use(collections({
    posts: {
      pattern: 'posts/*.html',
      reverse: true,
      sortBy: 'date'
    }
  }))
  .use(layouts({              // wrap layouts around html
    pattern: '**/*.html'
  }))
  .build((err) => {
    if (err) throw err
    console.log(`Build success in ${((performance.now() - t1) / 1000).toFixed(1)}s`)
  });