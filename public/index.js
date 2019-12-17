const path = require("path");
const express = require("express")
const app = express();

//define paths for express
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views")
//setup hanlebars engine 
app.set("viws engine", "hbs")//Telling express/NODE to use handlebars for templates
app.set("viws", viewsPath)//telling express to get templates from templates/views folder
app.get("", async (req, res) => {
    try {
        res.render("index")
    } catch (error) {
        res.status(500).send()
    }
})

app.get("/thamisucks", (req, res) => {
    res.send("Thami Sucks")
})






app.listen(3000, (req, res)=> {
    console.log('listening on port 3000')
    console.log(viewsPath)
})
