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
app.get("/bmicalculator", function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmicalculator", function(req,res){
    var n1 = Number.parseFloat(req.body.height);
    var n2 = Number.parseFloat(req.body.weight);
    var bmi = n1/(n2 * n2);
    res.send("bmi is " +bmi);
});

app.listen(3000,function(){
    console.log("server post is running on 3000");
});