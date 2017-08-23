let express = require("express");
let router = express.Router();
let definitions:Definitions = require("./definitions");
const port = 3004;

interface RouteDef{
    'url': string;
    'response': Object;
    'method': string;
}
interface Definitions {
    routesDef: RouteDef[];
};

definitions.routesDef.forEach(route => {
    console.log('defining route URL: "'+route.url+'"');
    if (route.method == 'get'){
        console.log('defining route URL methdo: "'+route.method+'"');
        router.get(route.url, function (req,res){
            res.json(route.response);
        });
    };
    if (route.method == 'post'){
        console.log('defining route URL methdo: "'+route.method+'"');
        router.post(route.url, function (req,res){
            res.json(route.response);
        });
    };
});
let app = express();
app.use('/', router);


app.listen(port, function () {
  console.log('App listening on port '+port+' !')
});
