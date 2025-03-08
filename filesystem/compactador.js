const express = require('express');
const app = express();

const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const inputFile = path.join(__dirname, 'input.txt'); // Arquivo original
const outputFile = path.join(__dirname, 'input.txt.gz'); // Arquivo comprimido

// Criando um stream de compressão
const gzip = zlib.createGzip();

// Criando Streams de leitura e escrita
const readStream = fs.createReadStream(inputFile);
const writeStream = fs.createWriteStream(outputFile);

// Encadeando os streams
readStream.pipe(gzip).pipe(writeStream);

writeStream.on('finish', () => {
  console.log('✅ Arquivo compactado com sucesso!');
});

app.listen(3000, () => console.log(`O servidor está rodando na porta: ${3000}`));