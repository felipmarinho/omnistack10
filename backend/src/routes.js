const { Router } = require('express');
const routes = Router();

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

/**
* Type of params:
* Query params 	-> request.query (they are visible in url) Ex: Filtros, ordenação, paginação...
									console.log(request.query);
* Route params	-> request.params stay in url, it doesnt have key = Identificar um recurso na alteração ou remoção (/users/:id the id is reference of route params)
									console.log(request.params);
* Body 					-> request.body (Dados para criação ou alteração de um registro)
									console.log(request.body);
*  */ 

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;