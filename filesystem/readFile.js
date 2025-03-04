const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, 'logs', 'access.log');

fs.readFile(logFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }

  // Separando os logs por linha
  const logLines = data.trim().split('\n');

  // Pegando os últimos 5 registros
  const lastLogs = logLines.slice(-5);

  console.log('Últimos 5 registros de acesso:');
  lastLogs.forEach((line, index) => {
    console.log(`${index + 1}. ${line}`);
  });
});
