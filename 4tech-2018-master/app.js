'use strict';

const server = require('./config/server');
const express = require('express');
const port = 3005;

server.use('/vjobs', express.static(__dirname + '/app/static'));
server.get('/', async(req, res) => {
    return res.redirect('http://localhost:3005/vjobs');
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})