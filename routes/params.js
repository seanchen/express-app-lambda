"use strict";

/**
 * try the named route parameters.
 *  - details: https://expressjs.com/en/guide/routing.html#route-parameters
 */

module.exports = function(app) {

    app.get("/params", function(req, res) {

        // set content type.
        res.set('Content-Type', 'text/html');
        res.status(200).send('params: ' + 
            JSON.stringify(req.params, null, 2));
    });

    app.get("/params/:id", function(req, res) {

        // set content type.
        res.set('Content-Type', 'text/html');
        res.status(200).send('params: ' + 
            JSON.stringify(req.params, null, 2));
    });

    app.get("/params/:id/:category", function(req, res) {

        // set content type.
        res.set('Content-Type', 'text/html');
        res.status(200).send('params: ' + 
            JSON.stringify(req.params, null, 2));
    });
};
