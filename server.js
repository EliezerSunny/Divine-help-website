const { createServer } = require('http');
const { parse } = require('url');
const path = require('path');
const fs = require('fs');

createServer((req, res) => {
  const parsedUrl = parse(req.url, true);
  let pathname = `.${parsedUrl.pathname}`;

  // If the file does not end in .html, try adding .html
  if (!pathname.endsWith('.html')) {
    pathname = pathname + '.html';
  }

  fs.readFile(pathname, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end('Not Found');
      return;
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(data);
  });
}).listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
