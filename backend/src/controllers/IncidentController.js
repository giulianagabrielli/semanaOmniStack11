const connection = require('../database/connection'); //conexão com o banco

module.exports = {

    //list incidents
    async index(request, response){
        const { page = 1 } = request.query;

        const [count] = await connection('incidents')
            .count();

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'incidents.*', 
                'ongs.name', 
                'ongs.email', 
                'ongs.whatsapp', 
                'ongs.city', 
                'ongs.uf']);

        response.header('X_Total-Count', count['count(*)']); 
    
        return response.json(incidents);
    },
    
    //create incident
    async create(request, response){

        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });

        return response.json({ id });
    },

    //delete incident
    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization; //precisa verificar se o incident é da ong q está tentando apagá-lo

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incident.ong_id != ong_id) {
            return response.status(401).json({ error: 'Operation not permitted.'});
        }

        await connection('incidents')
            .where('id', id)
            .delete();

        return response.status(204).send();
        
    }

};