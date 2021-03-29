let Redirection_DB = require("../api/src/Redirection_DB.js");
const test_json = require("./test.json");
const fs = require("fs");
//describe("Test", () => {
//  let redirection;
//  before(() => {
//    // @TODO this would be a better name. Write_json is wrong because it is not what the class is about
//    redirection = new Redirection_DB({ redirection: test_json });
//  });
//  it("Creates new redirection.json with one redirect added", () => {
//    // @TODO assertions go here
//    const raw_json = fs.readFileSync("./test/test.json");
//    const parsed_json = JSON.parse(raw_json);
//  });
//  it("Serializes database and input data in the table", () => {
//    redirection.__init__();
//  });
//});
//
//
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

    db.run("")
  })
});
