const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Bonjour depuis le serveur Node.js !');
});

server.listen(4000, () => {
    console.log('Serveur démarré sur: http://localhost:4000');
});