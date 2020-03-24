const connection = require('../database/connection'); //conexão com o banco
const crypto = require('crypto'); //vai gerar um texto aleatório para o id

module.exports = {

    //método list ong
    async index(request, response){
        const ongs = await connection('ongs').select('*');
        
        return response.json(ongs);
    },

    //método create ong
    async create(request, response){
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
    }
}