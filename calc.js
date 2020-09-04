const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");

});
app.post("/",function(req,res){
    var n1 = Number.parseInt(req.body.num1);
   var n2 = Number.parseInt(req.body.num2);
   var result = n1 + n2;

    res.send("result is " +result);
});


app.listen(3000,function(){
    console.log("server post is running on 3000");
});