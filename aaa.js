var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type' : 'texte/plain' });
    res.end('Hello World!');
}).listen(8000, '127.0.0.1');
console.log('server execute 127.0.0.1')    