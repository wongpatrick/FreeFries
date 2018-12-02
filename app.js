var express             = require("express"),
    app                 = express(),
    request             = require("request"),
    bodyParser          = require("body-parser"),
    methodOverride      = require("method-override");

var indexRoutes = require("./routes/index");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));


app.use(indexRoutes);

app.listen(4200, function(){
    // console.log(process.env.PORT +" "+ process.env.IP)
    console.log("FreeFries app has started");
});
