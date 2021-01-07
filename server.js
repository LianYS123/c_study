const http = require('http');
const fs = require('fs');
const pathlib = require('path');

http
  .createServer((req, res) => {
    let { url } = req;
    console.log(url);
    if (url === '/') {
      url = 'less/index.html';
    }
    const path = pathlib.join(__dirname, 'less', url);
    console.log(path);
    try {
      fs.createReadStream(path).pipe(res);
    } catch (err) {
      console.error(err);
      res.end('internal server error');
    }
  })
  .listen(8888);
