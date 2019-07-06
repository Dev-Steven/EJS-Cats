var express = require("express");
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// app.get('/', function(request, response) {
//    response.send("<h1>Hello Express</h1>");
// })
app.use(express.static(__dirname + "/static"));

app.get("/cars", function (request, response){
  response.render('cars');
})

app.get("/cats", function (request, response){
  response.render('cats');
})

app.get("/cat", function(request, response){
  
  var cats_array = [
    { name1: "Cuddles", img: "./images/cats.jpg", food1: "Spaghetti", age1: "3", spot1: "Under the bed", spot2: "In a sunbeam"},
  ];

  response.render('cat_detail', {cats: cats_array});
})

app.get("/grumpy", function(request, response){
  
  var cats_array = [
    { name1: "Grumpy", img: "./images/grumpy_cat.jpg", food1: "beef", age1: "12", spot1: "Trash", spot2: "In a Pot"},
  ];

  response.render('cat_detail', {cats: cats_array});
})

app.get("/jumping", function(request, response){
  
  var cats_array = [
    { name1: "Springs", img: "./images/jumping_cat.jpg", food1: "tofu", age1: "5", spot1: "Trash", spot2: "In a bag"},
  ];

  response.render('cat_detail', {cats: cats_array});
})


app.get("/cars/new", function (request, response){
  response.render('form');
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})