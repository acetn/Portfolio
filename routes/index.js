var express = require("express"),
    nodemailer = require("nodemailer"),
    validator = require("email-validator"),
    router = express.Router();


//INDEX
router.get("/", function(req, res){
    res.render("index");
});

//Handle Post DATA
router.post("/", function(req, res){
    
    // //Honeypot for Spambots
    // if(req.body.company) {
    //     res.render('index', {
    //         title: 'Contact',
    //         err: true,
    //         page: 'contact',
    //         type: 'empty',
    //         body: req.body.message,
    //         name: req.body.name,
    //         email: req.body.name,
    //         msg: 'spambot detected.',
    //         description: 'spam'
    //     });
    // return;
    // }
    
    //check if all required fields are filled
    if(! req.body.name || ! req.body.email || ! req.body.message) {
        res.render("index", {
            title: 'Contact',
            err: true,
            page: 'contact',
            type: 'empty',
            body: req.body.message,
            name: req.body.name,
            email: req.body.email,
            msg: 'Please fill in all required fields, thanks!',
            description: 'fields not filled in'
        });
    return;
    }
    
    //Check for valid email
    var email_check = validator.validate(req.body.email);
    
    if (email_check == false) {
        res.render('index', {
            title: 'Contact',
            err: true,
            page: 'contact',
            type: 'empty',
            body: req.body.message,
            name: req.body.name,
            email: req.body.email,
            msg: "Please enter a valid email",
            description: "invalid email"
        });
    return;
    }
    
    //Setup up smtp mailer
    var mailOpts, smtpTrans;
    
    //Setup nodemailer transport, I use 'Gmail',
    // Create an application-specific password to avoid problems.
    smtpTrans = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: "acewebfodder@gmail.com",
            pass: "Ace@Web5",
        }
    });
    
    //fill mail options
    mailOpts = {
        from: req.body.email, //grab form data from req body object
        to: 'ace@acetnguyen.com',
        subject: 'Website contact',
        text: req.body.message + ' || NAME: ' + req.body.name + ' || EMAIL: ' + req.body.email
    };
    
    smtpTrans.sendMail(mailOpts, function(error, info){
       
       //email not sent
       if (error) {
           console.log(error);
           res.render("index", {
               title: 'contact',
               page: 'contact',
               type: 'error',
               description: 'email not successful'
           });
       }
       // Email sent
       else {
           res.render("index", {
               title: 'Contact',
               page: 'contact',
               type: 'success',
               description: 'email successful'
           });
       }
    });
});



module.exports = router;