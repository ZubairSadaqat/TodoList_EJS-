const express = require('express');
const bodyParser = require('body-parser');

var items = ["Food", "Drink" ,'eat'];
var workitems = [];
const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');
app.use(express.static("public"))


app.get("/", (req,res)=>{
    const today = new Date();
    // const day = days[today.getDay()];
    var options = {
        weekday : "long",
        day: "numeric",
        month:"long"
    };
    var day = today.toLocaleDateString("en-PK", options);

    res.render('list', {listTitle: day, NewItemlists : items});
});

app.post("/", (req,res)=>{
    // console.log(req.body)
    let str = req.body.newItem;
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
    let item = req.body.newItem;
    workitems.push(item);
    res.redirect("/work")
})

app.get("/About", (req,res)=>{
    res.render("About");
})

app.listen(3000, ()=>{
    console.log("Server is listing on port : 3000")
})