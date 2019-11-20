const { createServer } = require('http');
const { join } = require('path');
const { parse } = require('url');
const next = require('next');

const PORT = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    // handle GET request to /service-worker.js
    console.log('-------', pathname);
    if (pathname === '/service-worker.js') {
      const filePath = join(__dirname, '.next', `/public${pathname}`);
      app.serveStatic(req, res, filePath);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
