const express = require("express");
const app = express();
const port = 3000;


function sum(a, b) {
    //console.log(a + b);
    return a + b;

}

app.get("/sum", function(req, res) {
    const a = req.query.a;
    const b = req.query.b; 
    const ans = sum(a, b);
    res.send(ans);
})

app.listen(port);