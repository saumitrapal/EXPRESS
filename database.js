const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 3000;

mongoose.connect("mongodb+srv://spal:saumitra%40pal@cluster0.oqwhr.mongodb.net/userappnew");  // connection to url to connect database

const all_user = mongoose.model("all_user", {name: String, email: String, password: String});   //moogoose schema that is define as how user data input like this specific format


app.post("/signup", function(req, res) {
    const username = req.body;
    const email = req.body;
    const password = req.body;

    const user = new all_user({
        username: username,
        email: email,
        password: password,
    });


    // const userExists = all_user.findOne({email: username});    // this line of code check user emali and find one database if this email is exist return 403 status code if not find then create newuser
    // if (userExists) {
    //     res.status(403).send("User emali is not valid");
    // }

    
 
    res.json({
        msg: "user created successfully"
    })

    user.save();    // this line code to save userdata(username, email, password) from my database
})


app.listen(port);
