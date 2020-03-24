const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//rota para login
routes.post('/sessions', SessionController.create);

//rotas das Ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//rotas dos casos
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

//rota casos de Ong
routes.get('/profile', ProfileController.index);


module.exports = routes;