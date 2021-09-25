const greet = require("./controller").greet;

const name = "Test Doe";
const greetMsg = greet(name);

if (greetMsg === `Greeting ${name}!`) {
  console.log("%cTest - PASS", "color: green");
} else {
  console.log("%cTest - FAILED", "color: red");
}
