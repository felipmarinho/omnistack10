const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-mukr3.mongodb.net/week10?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// app.use() -> Can be used in all methods
// app.get() -> Can be used only in methods get()
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json()); // -> now our software can understand requests these are using JSON.
app.use(routes);

server.listen(3333);