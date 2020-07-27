"use strict";

module.exports = function(app) {

    app.get("/download", function(req, res) {

        // set content type.
        res.set('Content-Type', 'text/plain');
        res.set('Content-Disposition', 'attachment; filename=aname.txt');
        res.status(200).send('some simple content!');
    });
};
