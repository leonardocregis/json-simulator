"use strict";
var express = require("express");
var router = express.Router();
var definitions = require("./definitions");
definitions.routes.forEach(function (route) {
    router.get(route.url, function (req, res) {
        res.json(route.response);
    });
});
var app = express();
app.use('/', router);
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
