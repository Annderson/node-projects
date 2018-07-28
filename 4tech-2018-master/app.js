'use strict';

const server = require('./config/server');
const express = require('express');
const port = process.env.PORT || 3005;

server.use('/vjobs', express.static(__dirname + '/app/static'));
server.get('/', async(req, res) => {
    return res.redirect('https://tech18.herokuapp.com/vjobs');
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})