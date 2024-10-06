const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://spal:saumitra%40pal@cluster0.oqwhr.mongodb.net/userappnew");

const User = mongoose.model("User", {name: String, email: String, password: String});

const user = new User({
    name: "spal",
    email: "abc@gmail.com",
    password: "123456"
})

user.save();

// this line of code save user in my database