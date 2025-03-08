const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/upload') {
    const fileStream = fs.createWriteStream('upload.txt');

    req.pipe(fileStream);

    req.on('end', () => {
      res.writeHead(200);
      res.end('✅ Upload concluído!');
    });

    req.on('error', (err) => {
      console.error('❌ Erro no upload:', err);
      res.writeHead(500);
      res.end('Erro ao fazer upload.');
    });
  } else {
    res.writeHead(404);
    res.end('Página não encontrada');
  }
});

server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
