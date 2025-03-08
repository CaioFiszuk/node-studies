const express = require('express');
const app = express();
const fs = require('fs');

const source = fs.createReadStream('bigfile.txt');
const destination = fs.createWriteStream('copy.txt');

// Pipe conecta o stream de leitura ao de escrita
source.pipe(destination);

source.on('end', () => {
  console.log('✅ Arquivo copiado com sucesso!');
});

source.on('error', (err) => {
  console.error('❌ Erro ao copiar o arquivo:', err);
});


app.listen(3000, () => console.log(`O servidor está rodando na porta: ${3000}`));