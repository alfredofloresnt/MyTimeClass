var express = require("express");
var mongoose = require("mongoose");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");  
res.header("Access-Control-Allow-Methods", "PATCH, POST, GET, PUT, DELETE, OPTIONS");

  next();
});
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/users',function(err,res){
  if (err){
    console.log(err);
  }
  else{
    //console.log(res);
  }
});

app.get('/',function (req,res){
  res.send("Hello World");
});

require('./routes')(app);

var server = app.listen(5000,function (){
  console.log("Server is running...");
})
