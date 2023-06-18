
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require("morgan");
const app = express();
const route = require('./route');
const mongoose = require('mongoose');
const cors = require('cors');
const responseSender = require('./middleware/responseSender');

// env
const url = "mongodb://127.0.0.1:27017";


// DB setup

mongoose.connect(`${url}/firstDB`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

// middleware
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: '*/*'}));
route(app);

// server setup
const port = process.env.PORT || '4000';
const server = http.createServer(app);
server.listen(port);
console.log(`server running at port: ${port}`)