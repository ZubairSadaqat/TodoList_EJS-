const express = require('express');
const bodyParser = require('body-parser');
const date = require( __dirname + "/date.js");

const items = ["Food", "Drink" ,'eat'];
const workitems = [];
const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');
app.use(express.static("public"))


app.get("/", (req,res)=>{
    // let day = date.getDay();
    const day = date.getDate();
    res.render('list', {listTitle: day, NewItemlists : items});
});

app.post("/", (req,res)=>{
    // console.log(req.body)
    const str = req.body.newItem;
    if (req.body.list === "work list")
    {
        workitems.push(str);
        res.redirect("/work")
    }
    else {
        items.push(str);
        res.redirect("/");
    }

})

app.get("/work" , (req,res)=>{
    res.render('list', {listTitle: "work list", NewItemlists : workitems});
})

app.post("/work" , (req,res)=>{
    // let item = req.body.newItem;
    // workitems.push(item);
    res.redirect("/work")
})

app.get("/About", (req,res)=>{
    res.render("About");
})

app.listen(3000, ()=>{
    console.log("Server is listing on port : 3000")
})