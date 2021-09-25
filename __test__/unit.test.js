const greet = require("../src/controller").greet;

test("Sample test", () => {
  const name = "Test Doe";
  expect(greet(name)).toBe(`Greeting ${name}.`);
});
