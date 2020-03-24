const express = require('express');
const crypto = require('crypto'); //vai gerar um texto aleatório para o id
const connection = require('./database/connection'); //conexão com o banco

const routes = express.Router();

//list
routes.get('/ongs', async (request, response) => {
    const ongs = await connection('ongs').select('*');
    
    return response.json(ongs);
});

//create
routes.post('/ongs', async (request, response) => {
    const { name, email, whatsapp, city, uf } = request.body;
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
        id, 
        name,
        email,
        whatsapp,
        city,
        uf,
    });

    return response.json({ id });
});


module.exports = routes;