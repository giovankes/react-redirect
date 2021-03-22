//modules
const fs = require("fs");
const sql3 = require("sqlite3").verbose();
var db = new sql3.Database("hike_red");

//variables
const path = "./api/src/redirection.json";
class Redirection_DB {
  constructor({ redirection }) {
    this.redirection = redirection;
  }

  //Initialize our database and setup a new one if this is a new project, this
  //function should ever only be called once in every project

  read() {}

  //New redirection? cool: this function will create a new json file
  write() {
    //TODO: Write a function that creates a new json file with the correct
    //infrastructure to easily append new redirections to
    let json_string = JSON.stringify(this.redirection);
    console.log(json_string);
    db.serialize(function () {
      db.run("CREATE TABLE IF NOT EXISTS redirection (redirections TEXT)");

      var stmt = db.prepare("INSERT INTO redirection VALUES (?)");

      stmt.run(`"'${json_string}'"`);
      stmt.finalize();
    });
  }

  //This function will be used to update a incoming redirection ontop of our
  //existing redirections;
  update() {
    //Check if updated Redirection is already in the json file
    //@TODO Check if redirection already exists by using the ID as key
    //
  }

  //Check if this is the first time we're writing a redirection.json file
  check() {
    //Is this the case?

    this.write();
  }
}

module.exports = Redirection_DB;
