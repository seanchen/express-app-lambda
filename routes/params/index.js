"use strict";

/**
 * try the named route parameters.
 *  - details: https://expressjs.com/en/guide/routing.html#route-parameters
 */
const fs = require('fs');

module.exports = function(app) {

    app.get("/params", function(req, res) {

        // set content type.
        res.set('Content-Type', 'text/html');
        res.status(200).send('params: ' + 
            JSON.stringify(req.params, null, 2));
    });

    app.get("/params/:id", function(req, res) {

        // testing code to check the actural parameters.
        //res.set('Content-Type', 'text/html');
        //res.status(200).send('params: ' + 
        //    JSON.stringify(req.params, null, 2));

        const filePath = `${__dirname}/${req.params.id}.m3u`;

        try {
            if( fs.existsSync(filePath) ){
                res.sendFile(filePath);
            }
        } catch( err) {
            res.set('Content-Type', 'text/html');
            res.status(200).send('Can not find ID:' + req.params.id);
        }
    });

    app.get("/params/:id/:category", function(req, res) {

        // set content type.
        res.set('Content-Type', 'text/html');
        res.status(200).send('params: <pre>' + 
            JSON.stringify(req.params, null, 2) +
            '</pre>');
    });
};
