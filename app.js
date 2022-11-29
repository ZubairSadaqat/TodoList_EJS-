const express = require('express');
const bodyParser = require('body-parser');

var items = ["Food", "Drink" ,'eat'];
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

    res.render('list', {KindofDay: day, NewItemlists : items});
});

app.post("/", (req,res)=>{
    let str = req.body.newItem;
    items.push(str);
    res.redirect("/");

})


app.listen(3000, ()=>{
    console.log("Server is listing on port : 3000")
})