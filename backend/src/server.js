const express = require ('express');
const mongoose = require ('mongoose');
const routes = require ('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistackcluster.1zqh0.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// req.query = Acessar os parametros da query (para filtros)
// req.params = Acessar os parametros da rota (para edição, delete)
// req.body = Acessar o corpo da requisição (para criação, edição)

app.use(express.json());
app.use(routes);

app.listen(3333);