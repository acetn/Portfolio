var express = require("express"),
    nodemailer = require("nodemailer"),
    bodyParser      = require("body-parser"),
    
    app     = express(),
    
    indexRoutes     = require("./routes/index");


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+"/public"));
app.set("view engine", "ejs");

app.use("/", indexRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Portfolio is running!");
});