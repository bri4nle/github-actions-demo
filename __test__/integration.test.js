const request = require("supertest");
const app = require("../src/serverSide/server");
const regeneratorRuntime = require("regenerator-runtime");

// afterAll(() => {
//   closeConnection();
// });

describe("GET /search", () => {
  test("response with template code", (done) => {
    request(app)
      .get("/search?search_string=money")
      .expect(500)
      .then((response) => {
        done();
      });
  });
});
