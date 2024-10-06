const express = require("express");
const app = express();
const port = 3000;

let users = [{
    name: "jhon",
    kidney : [{
        healthy: false
    }, {healthy: true}]
}]

app.use(express.json());


app.get("/", function(req, res) {
    const jhonKidney = users[0].kidney[0];
    const jhonHealthyKidney = users.length;
    const numberOfHealthyKidneys = 0;
    for (let i = 0; i < jhonKidney; i++) {
        if (jhonKidney[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberUnhealthykidney = jhonHealthyKidney - jhonKidney;
    
    res.json({
        jhonHealthyKidney,
        numberOfHealthyKidneys,
        numberUnhealthykidney
    })
})


app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidney.push({
        healthy: isHealthy
    })

    res.json({
        msg: "Done"
    })
})


app.put("/", function(req, res) {
    for (let i = 0; i < users[0].kidney.length; i++) {
        users[0].kidney[i].healthy = true;
    }
    res.json({});
})


app.delete("/", function(req, res) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidney.length; i++) {
       if(users[0].kidney[0].healthy) {
        newKidneys.push({
            healthy: true
        })
       }
    }
    users[0].kidney = newKidneys;
    res.json({msg: "Done!"})
})


app.listen(port);