const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/health-checkup", function(req, res) {
    const kidneys = req.body.kidneys;
    const kidneyLenght = kidneys.lenght;

    res.json({
        msg: "you have "+ kidneyLenght +" kidneys"
    })
})

// global catches 
// global catches are used in error handleing if the use is send to invalid inputs then 
// it used global catches to insure the user can see some vaild error from there inputs
app.use(function(err, req, res, next) {
    res.status(500).json({
        msg: "somthing went wrong in our server!"
    })
    next();
})

app.listen(port);