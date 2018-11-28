var express = require("express");
var app = express();

app.use(express.json());

const names = [{ id: 1, fname: "CPP" }, { id: 2, fname: "Java" }];

app.get("/", function(req, res) {
  res.send(names);
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

app.listen(3000, () => {
  console.log("Server started!");
});
