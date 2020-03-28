const request = require('supertest');
const app = require('../../src/app'); //ATENÇÃO --> na aula, mudamos o nome index.js para app.js para realizar testes integração. Não fiz essa alteração para não confundir.
const connection = require('../../src/database/connection')

describe('ONG', () => {

    beforeEach(async () => {
        await connection.migrate.rollback(); 
        await connection.migrate.latest();
    })

    afterAll(async () => {
        await connection.destroy();
    });

    it('soulg be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            // .set('Authorization', 'idDaOng') se precisar do id da ong
            .send({
                name: "APAD2",
                email: "contato@gmail.com",
                whatsapp: "1100000000",
                city: "São Paulo",
                uf: "SP"

        });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);

    });
});