const express = require('express');
const app = express();
const crypto = require("crypto");

const hmac = crypto.createHmac('sha256', 'secret');
hmac.update('mensagem');
console.log(hmac.digest('hex'));

app.listen(3000, () => console.log(`O servidor está rodando`));
