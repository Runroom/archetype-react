const withOffline = require('next-offline');
const sitemap = require('nextjs-sitemap-generator');
const site = require('./config/site.json');

sitemap({
  baseUrl: site.siteUrl,
  pagesDirectory: __dirname + '/pages',
  targetDirectory: 'public/'
});

const nextConfig = {
  target: 'serverless',
  transformManifest: manifest => ['/'].concat(manifest), // add the homepage to the cache
  generateInDevMode: true,
  workboxOpts: {
    importScripts: ['./js/firebase-messaging-sw.js'],
    swDest: 'service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  },
  webpack: config => {
    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();
      if (entries['main.js'] && !entries['main.js'].includes('./lib/sw.js')) {
        entries['main.js'].unshift('./lib/sw.js');
      }

      return entries;
    };
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  }
};

module.exports = withOffline(nextConfig);
