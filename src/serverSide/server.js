// Main program for the quote server
// Prerequisites:
//  - Install node
//  - Install pm2 globally - see https://pm2.keymetrics.io/docs/usage/quick-start/
// To execute, cd to the serverSide directory and give command:
//   pm2 start server.js
// Point browser to http://localhost:3000/
//   - N. Wilde, June 2021

// Load my class that holds the set of quotations
const AllQuotes = require("./AllQuotes");
const QUOTE_DB_FILE = "src/data/quotes_all.csv";

// Load and configure the Express web server
const express = require("express");
const app = express();

const isSafe = (req, res, next) => {
  const pattern = /[^a-zA-Z0-9 ]/;

  if (pattern.test(req.query.search_string)) {
    req.query.search_string = null;
  }
  next();
};

// Set the paths that Express will recognize and assign a function
// to handle GET messages for each set of paths
app.get("/", (req, res) => res.send(getResponseHTML(null)));
app.get("/search", isSafe, (req, res) => {
  res.send(getResponseHTML(req.query.search_string));
});

// Function to process an input message and emit the response
// Input is sString - the search string to locate a quotation
// If null, just display "Please do a search"
function getResponseHTML(sString) {
  console.log("Searched for: " + sString); // DEBUG

  // aQuote is a javascript object with the quote to return
  let aQuote = { theText: "Please do a search" };
  if (null !== sString && sString.length > 0) {
    let searcher = new AllQuotes();
    // Load the collection of quotes
    searcher.loadFromFile(QUOTE_DB_FILE);
    aQuote.theText = searcher.findQuote(sString);
  }

  // template is a shell for the HTML response message
  // The quote gets inserted and then the template is returned
  let template = `
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
            ${aQuote.theText}
            </p>
        </body>
        </html>`;

  return template;
} // end getResponseHTML()

module.exports = app;
