const express = require("express");
const app = express();
const port = 3000;

app.get("/health-checkup", function(req, res) {
    const kidneyId = req.query.kidneyId;
    const username = req.header.username;
    const password = req.header.password;

    if (username != "spal" && password != "pass") {
        res.status(403).json({
            msg: "user doesnt exists"
        });
        return;
    }
    
    if (kidneyId != 1 || kidneyId != 2) {
        res.status(411).json({
            msg: "worng inputs"
        })
        return;
    }

    res.send("your heart is healthy");
})

app.listen(port)

// lot of if and else check is dum way to doing auth check and inputs vaildation
// middlewares can fix it if you create auth an app you sure use middlewares