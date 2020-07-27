"use strict";

module.exports = function(app) {

    app.get("/download", function(req, res) {

        // set content type.
        res.contentType('text/plain');
        res.send('some simple content', {
            'Content-Disposition': 'attachment; filename=aname.txt'
        });
    }
};
