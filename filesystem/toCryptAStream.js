const express = require('express');
const app = express();

const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

// Definir chave e vetor de inicialização
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32); // Chave secreta de 256 bits
const iv = crypto.randomBytes(16); // Vetor de inicialização

// Criar um stream de criptografia
const cipher = crypto.createCipheriv(algorithm, key, iv);

const inputFile = path.join(__dirname, 'input.txt'); // Arquivo original
const outputFile = path.join(__dirname, 'encrypted.txt'); // Arquivo criptografado

const readStream = fs.createReadStream(inputFile);
const writeStream = fs.createWriteStream(outputFile);

// Aplicando a criptografia no stream
readStream.pipe(cipher).pipe(writeStream);

writeStream.on('finish', () => {
  console.log('✅ Arquivo criptografado com sucesso!');
  console.log('Chave:', key.toString('hex'));
  console.log('IV:', iv.toString('hex'));
});

app.listen(3000, () => console.log(`O servidor está rodando`));


//Chave: 51706ced08f57a9cefdfa1e4df95fc369238b192de10db894dcbb5bf37dcdd7f
//IV: f9c41c5b023e5417e38a2ea2f120851d
