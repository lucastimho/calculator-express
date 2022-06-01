const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res) {
    console.log("Thanks for posting that!")
})

app.listen(3000, function() {
    console.log("Server started on port 3000")
})