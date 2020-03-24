const connection = require('../database/connection'); //conexão com o banco

module.exports = {

    //login
    async create(request, response) {
        const { id } = request.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

        if(!ong) {
            return response.status(400).json({ error: 'No Ong found with this ID'});
        }

    return response.json(ong);
    }
}