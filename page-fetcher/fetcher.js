const request = require("request");
const fs = require("fs");
const args = process.argv.slice(2);


const URL = args[0];
const location = args[1]

request(URL, (error, response, body) => {
  if (error) {
    console.log("Error: ", error);
  }
    console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ${location}`)
  });

