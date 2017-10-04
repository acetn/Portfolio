var express = require("express"),
    nodemailer = require("nodemailer"),
    bodyParser      = require("body-parser"),
    flash = require('connect-flash'),
    
    app     = express(),
    
    indexRoutes     = require("./routes/index");

app.use(require("express-session")({
    secret: "any words can go here",
    resave: false,
    saveUninitialized: false
}));
app.use(flash());


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+"/public"));
app.set("view engine", "ejs");

//applies to all pages
app.use(function(req, res, next){
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use("/", indexRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Portfolio is running!");
});
