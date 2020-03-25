require('dotenv').config();

const cors = require('cors');
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');

const routes = require('./routes');
const { setupSocket } = require('./socket');

const app = express();
const server = http.Server(app);

setupSocket(server);

mongoose.connect(process.env.DB_STRING, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
