const connection = require('../database/connection'); //conexão com o banco
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {

    //método list ong
    async index(request, response){
        const ongs = await connection('ongs').select('*');
        
        return response.json(ongs);
    },

    //método create ong
    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body;

        const id = generateUniqueId();

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