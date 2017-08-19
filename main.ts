let express = require("express");
let router = express.Router();
let definitions = require("./definitions");


definitions.routes.forEach(route => {
    router.get(route.url, function (req,res){
        res.json('hello world');
    });
})

let app = express();
app.use('/', router);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});