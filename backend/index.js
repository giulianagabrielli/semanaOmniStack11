const express = require('express'); 

//variável para armazenar a aplicação
const app = express();
app.listen(3333); //localhost:3333 para acessar a aplicação

//rotas
app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Giuliana Gabrielli'
    });
});