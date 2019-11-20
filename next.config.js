const withOffline = require('next-offline');
const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: 'https://example.com',
  pagesDirectory: __dirname + '/pages',
  targetDirectory: 'public/'
});

const nextConfig = {
  target: 'serverless',
  transformManifest: manifest => ['/'].concat(manifest), // add the homepage to the cache
  generateInDevMode: true,
  workboxOpts: {
    importScripts: ['/public/js/firebase-messaging-sw.js'],
    swDest: 'public/js/service-worker.js',
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
  webpack: cfg => {
    const originalEntry = cfg.entry;
    cfg.entry = async () => {
      const entries = await originalEntry();
      if (entries['main.js'] && !entries['main.js'].includes('./lib/sw.js')) {
        entries['main.js'].unshift('./lib/sw.js');
      }

      return entries;
    };
    return cfg;
  }
};

module.exports = withOffline(nextConfig);
