'use strict'
const express = require('express');

module.exports = function() {

    let app = express();
    
    app.get('/', (req, res) => {

        res.sendFile(`${__dirname}/index.html`);
    })
    
    // try to server a static text file.
    app.get('/txt', (req, res) => {

        res.sendFile(`${__dirname}/index.txt`);
    })
    
    // try to server a static text file.
    app.get('/m3u', (req, res) => {
        res.sendFile(`${__dirname}/index.m3u`);
    });

    return app;
}
