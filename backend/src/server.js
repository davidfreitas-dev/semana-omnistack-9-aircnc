const express = require ('express');
const cors = require ('cors');

const mongoose = require ('mongoose');
const path = require ('path');
const routes = require ('./routes');

const socketio = require ('socket.io');

const app = express();
const server = require('http').createServer(app);
const options = { cors: true };
const io = socketio(server, options);

const connectedUsers = {};

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistackcluster.1zqh0.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

io.on('connection', socket => {
    const { user_id } = socket.handshake.query;

    connectedUsers[user_id] = socket.id;
});

app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
})

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

server.listen(3333);

// req.query = Acessar os parametros da query (para filtros)
// req.params = Acessar os parametros da rota (para edição, delete)
// req.body = Acessar o corpo da requisição (para criação, edição)