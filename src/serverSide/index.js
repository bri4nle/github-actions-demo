const app = require("./server");
const port = 3000;

app.listen(port, () =>
  console.log(`quote server app listening at http://localhost:${port}`)
);
