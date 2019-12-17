const path = require("path");
const express = require("express")
const app = express();

app.get("", (req, res) => {
    res.send("Thami likes bagels and butter. Also he smells")
})

app.get("/thamisucks", (req, res) => {
    res.send("Thami Sucks")
})






app.listen(3000, (req, res)=> {
    console.log('listening on port 3000')
})
