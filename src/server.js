const express = require("express");
const app = express();
const port = 3000;
const greet = require("./controller").greet;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const form =
    '<h1>Greeting App</h1><form method="POST" action="/greet">\
  Enter your name:<br><input type="text" name="name">\
  <br><br><input type="submit" value="Submit"></form>';
  res.send(form);
});

app.post("/greet", (req, res) => {
  res.send(`<h2>${greet(req.body.name)}</h2>`);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
