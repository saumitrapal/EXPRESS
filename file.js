const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;


app.get("/file/:fileName", function(req, res) {
    const name = req.params.fileName;

    fs.readFile(name, "utf-8", function(err, data) {
        res.json({data});
    })
})


app.listen(port);