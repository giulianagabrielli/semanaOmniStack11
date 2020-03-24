const express = require('express'); 
const routes = require('./routes');
const cors = require('cors');

const app = express(); //variável para armazenar a aplicação

app.use(cors());
app.listen(3333); //localhost:3333 para acessar a aplicação
app.use(express.json()); //para converter json em objeto do JavaScript
app.use(routes);
