const http = require('http');

const port = process.argv[2] || 4000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`Serveur démarré sur le port ${port}`);
});

server.listen(port, () => {
    console.log(`Serveur démarré sur : http://localhost:${port}`);
});