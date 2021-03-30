const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("hike_red");

//JSON
const test_json = require("../../test/test.json");
//Files
const DB_Model = require("./DB_Model.js");
class Redirection_DB {
  constructor({ redirection }) {
    this.redirection = redirection;
  }
  //This'll write the new redirection to the database
  //@TODO: Only write new redirections.

  __init__() {
    //This function only gets used to initalize a new database and create the
    //correct tables inside the database;
    let results;
    db.exec(
      "CREATE TABLE IF NOT EXISTS redirections (id INTEGER PRIMARY KEY, redirection TEXT)",
      (e) => {
        if (e) throw e;
        console.log("database initialized");
      }
    );
    db.all("SELECT * FROM redirections", (e, r) => {
      if (e) throw e;
    });
  }

  update_redirect(ID, redirection, duplicate_redirection) {
    //This function will update a existing redirection inside the database;
    if (duplicate_redirection) {
      db.exec(
        `UPDATE redirections SET redirection ='${redirection}' WHERE id = '${ID}'`,
        (e, r) => {
          if (e) throw e;
          console.log(r);
        }
      );
    }
  }
  write_redirect() {
    this.__init__();
    let ID = this.redirection.id;
    let duplicate_redirection = false;
    let json_red = JSON.stringify(this.redirection);

    let dbmodel = new DB_Model({ data: this.redirection });
    dbmodel.check(ID, json_red);
  } 

  //This functions is ONLY used when running tests. Please don't change this
  //code, and if you do: Please make sure all the tests pass again :)
  test() {
    const ID = parseInt(test_json.id);
    console.log(typeof ID);
    const json_red = JSON.stringify(test_json);
    let results;
    db.exec(
      "CREATE TABLE IF NOT EXISTS test (id INTEGER, redirection TEXT)",
      (e) => {
        if (e) throw e;
        console.log("database initialized");
      }
    );
    db.all("SELECT * FROM test", (e, r) => {
      if (e) throw e;
      console.log(r);
      const stmt = db.prepare("INSERT INTO test VALUES(?,?)", (e) => {
        if (e) throw e;
      });
      stmt.run(`${ID}`, `${json_red}`);
      stmt.finalize();
      console.log("Done");
    });
  }
}

module.exports = Redirection_DB;
