const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('message.txt', 'utf8', (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end(`
                <html>
                    <body>
                        <h1>Erreur 404</h1>
                        <p>Fichier non trouvé</p>
                        <footer>Serveur Node.js</footer>
                    </body>
                </html>
            `);
            return;
        }
        
        const htmlResponse = `
            <html>
                <head>
                    <title>Serveur Node.js</title>
                </head>
                <body>
                    <h1>Bienvenue sur notre serveur</h1>
                    <p>${data}</p>
                    <footer>Serveur Node.js - ${new Date().toLocaleString()}</footer>
                </body>
            </html>
        `;
        
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(htmlResponse);
    });
});

server.listen(8087, () => {
    console.log('Serveur démarré sur http://localhost:8087');
});