const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const { ParseStatus } = require("zod");
const jwtpassword = "1234567"
const port = 8000;

app.use(express.json());

const users = [{
    username: "abc@gmali.com",
    password: "12345"
}, {
    username: "123@gmali.com",
    password: "123456"
}, {
    username: "ABC@gmail.com",
    password: "1234567"
}]


function userExists(username, password) {
     let userExists = false;
     for(let i = 0; i < users.length; i++) {
        if(users[i].username == username && users[i].password == password) {
            userExists = true;
        }
     }
     return userExists
}

app.post('/signin', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username && password)) {
        res.json({
            msg: "User Doesn't Exists"
        })
    }

    var token = jwt.sign({ username: username}, "shhhh");       
    return res.status(403).json({
        token,
    })

})

app.get('/users', function(req, res) {
    const token= req.header.authorization;

    try {
        const decoded = jwt.verify(token, jwtpassword);         // varify is a fn of jwt that can varify jwt token and password
        const username = decoded.username;
    } catch (err) {
        res.status(403).json({
            msg: "Invalid token"
        })
    }

    res.json({
        users: users
    })
})

app.listen(port);