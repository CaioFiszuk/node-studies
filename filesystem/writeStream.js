const express = require('express');
const app = express();
const fs = require('fs');

const writeStream = fs.createWriteStream('output.txt');

writeStream.write('Linha 1: Olá, mundo!\n');
writeStream.write('Linha 2: Streams são eficientes!\n');
writeStream.write('Linha 3: Esse arquivo foi criado com um stream.\n');

// Finaliza o stream
writeStream.end(() => {
  console.log('✅ Arquivo salvo com sucesso!');
});

writeStream.on('error', (err) => {
  console.error('❌ Erro ao escrever no arquivo:', err);
});


app.listen(3000, () => console.log(`O servidor está rodando na porta: ${3000}`));