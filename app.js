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

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("FreeFries app has started");
});
