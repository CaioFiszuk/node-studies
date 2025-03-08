const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/download') {
    const filePath = path.join(__dirname, 'document.pdf');
    res.writeHead(200, { 'Content-Type': 'application/pdf' });

    // Lendo e enviando o arquivo usando stream
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  } else {
    res.writeHead(404);
    res.end('Página não encontrada');
  }
});

server.listen(3000, () => {
  console.log('Servidor rodando');
});
