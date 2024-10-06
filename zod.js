const express = require("express");
const app = express();
const zod = require("zod");
const port = 3000;

const schema = zod.array(zod.number());


app.use(express.json());

app.post("/health-checkup", function(req, res) {
    const kidneys = req.body.kidneys;
    const responce = schema.safeParse(kidneys);
    if (!responce.success) {
        res.status(411).json({
            msg: "invalid inputs"
        })
    } else {
        res.json({
            responce
        })
    }
})


app.listen(port);