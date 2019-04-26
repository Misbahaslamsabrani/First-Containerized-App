const express = require("express")
const app = express();
const hbs = require("hbs");

app.set('view engine', "hbs");

const path = require("path");

const viewFolderPath = path.join(__dirname, "../templates/views");
app.set("views", viewFolderPath)

const partialFolderPath = path.join(__dirname, "../templates/partials")
hbs.registerPartials(partialFolderPath);

app.get("/", (req,res) => {
    res.render("index", {
        name: "Misbah Aslam Sabrani",
    });
})

app.listen(3000, () => {
    console.log("Server is runing. . . ");
})