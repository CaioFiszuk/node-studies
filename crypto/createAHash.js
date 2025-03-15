const express = require('express');
const app = express();
const crypto = require("crypto");

const hash = crypto.createHash('sha256').update('senha123').digest('hex');
console.log(hash);

app.listen(3000, () => console.log(`O servidor está rodando`));
