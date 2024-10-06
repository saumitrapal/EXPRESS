const express = require("express");
const app = express();
const port = 3000;

function userMiddleware(req, res, next) {
    const username = req.header.username;
    const password = req.header.password;

    if (!(username === "spal" && password === "pass")) {
        res.status(403).json({
            msg: "user doesn't exsist"
        })
    } else{
        res.json(
            next()      // next is fn that daliy get the task to next fn
        )
    }
}

function kidneyMiddleware(req, res, next) {
    const kidneyId = req.query.kidneyId;

    if (!(kidneyId === 2 || kidneyId === 1)) {
        res.status(411).json({
            msg: "worng inputs"
    })
    } else{
        res.json(
            next()      // next is fn that daliy get the task to next fn
        )
    }
}

app.get("/health-checkup", userMiddleware, kidneyMiddleware, function(req, res) {
    res.json({
        msg: "everything is healty"
    })
})

app.listen(port);