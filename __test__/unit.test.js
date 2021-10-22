const AllQuotes = require("../src/serverSide/AllQuotes");
const aq01 = new AllQuotes();
aq01.addQuote("Every man is guilty of all the good he didn't do.");
aq01.addQuote("Before you embark on a journey of revenge, dig two graves.");

test('Find "graves" - Success test', () => {
  const res01 = aq01.findQuote("graves");
  expect(res01.search("Before you embark")).toBeGreaterThan(-1);
});

test('Find "missing" - Fail test', () => {
  const res02 = aq01.findQuote("missing");
  expect(res02.search("No matching quote")).toBeGreaterThan(-1);
});

const aq03 = new AllQuotes();
aq03.loadFromFile("src/data/3_quotes.csv");

test("Load from file", () => {
  let res03 = aq03.findQuote("smiles");
  expect(res03.search("indicate where smiles have been")).toBeGreaterThan(-1);
});
