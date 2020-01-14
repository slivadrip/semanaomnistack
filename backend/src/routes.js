const { Router } = require('express');
const axios =  require('axios');

const routes = Router();

routes.post('/devs', async (request, response) => {
    const{ github_username } =  request.body;

const response = axios.get(`https://api.github.com/users/${github_username}`);

    return response.json({message: 'Hello World 2'});
});

module.exports = routes;