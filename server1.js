const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.get("/", function(req, res){
  res.sendFile(__dirname +"/index.html");

});

app.post("/", function(req,res){
  var n1=   Number(req.body.num1);
  var n2= Number(req.body.num2);
  var result = n1+n2;
  res.send("The sum is " + result);
});


app.get("/athanks", function(req, res){
  res.send("<h1>shapeAI</h1><p>The workshop was really nice and helped me gain a lot of interest on the same. Thank you so much</p>");
});

app.listen(3000, function(){
  console.log("server has started on port 3000");
});
