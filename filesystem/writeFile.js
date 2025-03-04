const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const message = "Falha ao conectar ao banco de dados";
const logsDir = path.join(__dirname, 'logs'); // Caminho para a pasta 'logs'
const logFilePath = path.join(logsDir, 'error.txt'); // Caminho completo do arquivo

// Verifica se a pasta 'logs' existe, se não, cria
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

fs.writeFile(logFilePath, message, { flag: 'a' }, (err)=>{
  if (err) {
    console.error('Erro ao escrever no arquivo:', err);
  } else {
    console.log('Log salvo com sucesso!');
  }
});

app.listen(3000, () => console.log(`O servidor está rodando na porta: ${3000}`));