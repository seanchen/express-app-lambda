'use strict'
const express = require('express');

module.exports = function() {

    let app = express();

    require("../routes")(app);

    return app;
};
