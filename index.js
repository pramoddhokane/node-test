var express = require("express");
var app = express();
var http = require('http');
var fs = require("fs");

app.use(express.json());

const names = [{ id: 1, fname: "CPP" }, { id: 2, fname: "Java" }];
var port = process.env.PORT || 8080;

app.get("/", function(req, res) {
  fs.readFile("index.html", function(err, data){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  res.end();
});
});

app.get("/getcourses/:id", function(req, res) {
  const course = names.find(c => c.id === parseInt(req.params.id));
  res.send(course);
});

app.post("/courses", function(req, res) {
  const course = {
    id: names.length + 1,
    fname: req.body.name
  };

  names.push(course);
  res.send(course);
});

app.listen(port, () => {
  console.log("Server started!");
});
