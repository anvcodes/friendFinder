var path = require("path");
var express= require("express");

var PORT = process.env.PORT || 3000;

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routing/apiRoutes");

require("./routing/htmlRoutes");

//api routes

app.listen(PORT, function(){
    console.log('Listening on PORT: ' + PORT);
});



module.exports= app;