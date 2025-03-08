const express = require('express');
const app = express();

const fs = require('fs');
const { Transform } = require('stream');
const path = require('path');

const inputFile = path.join(__dirname, 'input.txt'); // Arquivo original
const outputFile = path.join(__dirname, 'output.txt'); // Arquivo transformado

// Criando um Transform Stream que converte texto para maiúsculas
const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase()); // Converte o conteúdo para maiúsculas
    callback();
  }
});

// Criando Streams de leitura e escrita
const readStream = fs.createReadStream(inputFile, 'utf8');
const writeStream = fs.createWriteStream(outputFile);

// Encadeando os streams
readStream.pipe(upperCaseTransform).pipe(writeStream);

writeStream.on('finish', () => {
  console.log('✅ Arquivo transformado com sucesso!');
});


app.listen(3000, () => console.log(`O servidor está rodando na porta: ${3000}`));