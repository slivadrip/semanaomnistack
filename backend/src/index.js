const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://slivadrip:Mudar123#@cluster0-shard-00-00-hctru.mongodb.net:27017,cluster0-shard-00-01-hctru.mongodb.net:27017,cluster0-shard-00-02-hctru.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true ,
    useUnifiedTopology: true
});
//Métodos HTTP: GET, POST, PUT E DELETE

//Tipos de parâmetros:

// Query Params: request.query(Filtros, ordenação, paginação, ...)
// Route Params: rquest.paramns (Indentifacar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação e alteração de registros)

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);