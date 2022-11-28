const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.get("/", (req,res)=>{
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const today = new Date();
    const day = days[today.getDay()];
    // if (today.getDay === 0 || today.getDay === 6 ){
    //     day = "Weekend";
    // }else {
    //     day = "Week Day";
    // }
    res.render('list', {KindofDay: day});
});

app.listen(3000, ()=>{
    console.log("Server is listing on port : 3000")
})