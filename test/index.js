let Redirection_DB = require("../src/main/Redirection_DB.js");
const test_json = require("./test.json");
const fs = require("fs");

// This test will initialize the database and see if everything works
// correctly. (Like a test should :P)
//
//@@TODO: Finish test
describe("Redirect test", () => {
  let redirection;
  before(() => {
    redirection = new Redirection_DB({redirection:test_json});
  })
  it("Serializes the database with data", () =>{
    //@@TODO:Serialize database;

    const raw_json = fs.readFileSync("./test/test.json");
    const parsed_json = JSON.parse(raw_json);

   redirection.__init__(); 
  })
});
