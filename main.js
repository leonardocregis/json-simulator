"use strict";
let express = require("express");
let router = express.Router();
let definitions = require("./definitions");
let port = 3004;
;
definitions.routesDef.forEach(route => {
    console.log('defining route URL: "' + route.url + '"');
    if (route.method == 'get') {
        console.log('defining route URL methdo: "' + route.method + '"');
        router.get(route.url, function (req, res) {
            res.json(route.response);
        });
    }
    ;
    if (route.method == 'post') {
        console.log('defining route URL methdo: "' + route.method + '"' + 'status:' + route.statusCode);
        router.post(route.url, function (req, res) {
            if (route.statusCode) {
                res.status(route.statusCode).json(route.response);
            }
            else {
                res.status(200).json(route.response);
            }
        });
    }
    ;
});
let app = express();
app.use('/', router);
if (definitions.port) {
    port = definitions.port;
}
app.listen(port, function () {
    console.log('App listening on port ' + port + ' !');
});
