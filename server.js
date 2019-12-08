var express = require('express');
var path = require ('path');
var routes = require('./routing/api');
var htmlRoutes = require('./routing/html')
var Router= express.Router();

const app = express();

var PORT = process.env.PORT || 3000;



app.use("/api", Router);


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/home.html"));
});

app.use("/", htmlRoutes);



 
  // This is the default setting for the web page.
  app.get('/:id', function(req, res){
    res.sendFile(path.join(__dirname, "/public/home.html"));

  });
  




app.listen(PORT, function(){
    console.log('Listening on PORT: ' + PORT);
});

