const request = require("supertest");
const app = require("../src/serverSide/server");
require("regenerator-runtime/runtime");

describe("GET /*", () => {
  test("Home route", (done) => {
    request(app)
      .get("/")
      .expect(200)
      .expect("Content-Type", /html/)
      .then((response) => {
        const template = `
    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
    <html>
        <head>
            <meta http-equiv="content-type" content="text/html; charset=UTF-8">
            <title>Quote Server Page</title>
        </head>
        <body>
            <h1>Welcome to Quote Server</h1>
            <form action="/search">
                <label for="search_string">Search string:</label><br>
                <input type="text" id="search_string" name="search_string"><br> <br>
                <input type="submit" value="Submit Search">
            </form>
            <hr>
            <p style="font-size: 1.5em;">
            Please do a search
            </p>
        </body>
        </html>`;
        expect(response.text).toBe(template);
        done();
      });
  });

  test("Search with 'money'", (done) => {
    request(app)
      .get("/search")
      .query({ search_string: "money" })
      .expect("Content-Type", /html/)
      .expect(200)
      .then((response) => {
        const text =
          "My restaurants are never opened on Thanksgiving I want my staff to spend time with their family if they can. My feeling is, if I can't figure out how to make money the rest of the year so that my workers can enjoy the holidays, then I don't deserve to be an owner.";
        expect(response.text.includes(text)).toBe(true);
        done();
      });
  });

  test("Search with 'sdsds'", (done) => {
    request(app)
      .get("/search")
      .query({ search_string: "sdsds" })
      .expect("Content-Type", /html/)
      .expect(200)
      .then((response) => {
        const text = "No matching quote was found";
        expect(response.text.includes(text)).toBe(true);
        done();
      });
  });
});
