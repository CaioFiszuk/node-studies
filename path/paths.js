const express = require('express');
const app = express();
const path = require('path');

const path1 = path.join(__dirname, 'logs/access.log'); //Concatena os caminhos

const path2 = path.resolve('/logs', 'access.log'); //Retorna o caminho absoluto baseado no diretório atual

const filePath = '/laragon/www/node_studies/logs/access.log';

const brokenFilePath = '/laragon/www//node_studies/logs//access.log';

// console.log(path.basename(filePath)); //Retorna o nome do arquivo de um caminho

// console.log(path.dirname(filePath)); //Retorna apenas o diretório de um caminho

// console.log(path.extname(filePath)); //Retorna a extensão do arquivo

// console.log(path.parse(filePath)); 
/**
 * //Retorna isso
 * {
  root: '/',
  dir: '/laragon/www/node_studies/logs',
  base: 'access.log',
  ext: '.log',
  name: 'access'
  }
*/

// console.log(path.isAbsolute(filePath)); //Retorna se o caminho é absoluto ou não

// console.log(path.normalize(brokenFilePath)); //Concerta o caminho escrito de forma errada


app.listen(3000, () => console.log(`O servidor está rodando`));
