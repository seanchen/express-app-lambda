"use strict";

module.exports = function(app) {

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

    // try the download endpoint
    require('./download')(app);
    require('./params')(app);
};
