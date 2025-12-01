const http = require('http');
const PORT = 3000;
const server = http.createServer((req, res) => { res.writeHead(200,
{ "Content-Type": "text/plain" }); //http.createServer() prend uncallback (req, res) qui s’exécute à chaque requête.
res.end("Bonjour depuis Node.js (avec nodemon )");
//res.end() termine la réponse ; Toujours terminer une réponseavec res.end() pour éviter que le navigateur attende indéfiniment.
});
server.listen(PORT, () => { console.log(`Serveur en écoute sur
http://localhost:${PORT}`); });