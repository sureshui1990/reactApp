
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require("morgan");
const app = express();
const route = require('./route');


// middleware
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*'}));
route(app);

// server setup
const port = process.env.PORT || '4000';
const server = http.createServer(app);
server.listen(port);
console.log(`server running at port: ${port}`)