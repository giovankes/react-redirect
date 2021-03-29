const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("hike_red");
const DB_Model = require("./DB_Model.js");
class Redirection_DB {
  constructor({ redirection }) {
    this.redirection = redirection;
  }
  //This'll write the new redirection to the database
  //@TODO: Only write new redirections.
  //
  __init__() {
    db.exec(
      "CREATE TABLE IF NOT EXISTS redirections (id INTEGER PRIMARY KEY, redirection TEXT)",
      (e) => {
        if (e) throw e;
      }
    );
  }

  write_redirect() {
    //create new database with the correct infrastructure
    __init__();
    //@@TODO: create new database;
    let ID = this.redirection.id;
    let duplicate_redirection = false;
    //Check if id is already in the database and insert || update accordingly
    let json_red = JSON.stringify(this.redirection);

    let dbmodel = new DB_Model({ data: this.redirection });

    console.log(ID);
    //dbmodel.check(ID);
  }
}

module.exports = Redirection_DB;
