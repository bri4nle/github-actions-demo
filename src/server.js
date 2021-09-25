const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const form =
    '<h1>Greeting App</h1><form method="POST" action="/greet">\
  Enter your name:<br><input type="text" name="name">\
  <br><br><input type="submit" value="Submit"></form>';
  res.send(form);
});

app.post("/greet", (req, res) => {
  const greet = `<h1>Greeting ${req.body.name}!</h1>`;
  res.send(greet);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
