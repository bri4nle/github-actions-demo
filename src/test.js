const greet = require("./controller").greet;

const name = "Test Doe";
const greetMsg = greet(name);

if (greetMsg === `Greeting ${name}!`) {
  console.log("Test - PASS");
} else {
  console.log("Test - FAILED");
}
