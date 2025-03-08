const express = require('express');
const app = express();

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'bigfile.txt');

// Criando um stream de leitura
const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

readStream.on('data', (chunk) => {
  console.log('📄 Lendo um pedaço do arquivo:');
  console.log(chunk);
});

readStream.on('end', () => {
  console.log('✅ Leitura do arquivo finalizada.');
});

readStream.on('error', (err) => {
  console.error('❌ Erro ao ler o arquivo:', err);
});


app.listen(3000, () => console.log(`O servidor está rodando na porta: ${3000}`));