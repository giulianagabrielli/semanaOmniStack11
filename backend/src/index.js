const express = require('express'); 
const routes = require('./routes');
const cors = require('cors');

const { errors } = require('celebrate');

const app = express(); //variável para armazenar a aplicação

app.use(cors());
app.use(express.json()); //para converter json em objeto do JavaScript
app.use(routes);
app.use(errors());

app.listen(3333); //localhost:3333 para acessar a aplicação