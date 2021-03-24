const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("hike_red");
const fs = require("fs");

class Redirection_DB {
  constructor({ redirection }) {
    this.redirection = redirection;
  }
  //This'll write the new redirection to the database
  //@TODO: Only write new redirections.
  write_redirect() {
    let ID = this.redirection.id;
    let duplicate_redirection = false;
    //Check if id is already in the database and insert || update accordingly
    let json_red = JSON.stringify(this.redirection);
    db.serialize(function () {
      db.exec(
        "CREATE TABLE IF NOT EXISTS redirection (id INTEGER, redirection TEXT)"
      );
      db.all("SELECT * FROM redirection", (e, r) => {
        r.map((result, key) => {
          if (result.id === ID) {
            duplicate_redirection = true;
          } else {
            console.log("no");
          }
        });
        console.log(duplicate_redirection);
        if (duplicate_redirection === true) {
          //if the redirection is a dupe we want to update the appropiate
          //redirection, instead of adding  a new one
        } else {
          //is it a new redirection? cool, then we just insert it into the
          //database
          const stmt = db.prepare(`INSERT INTO redirection VALUES(?,?)`);
          stmt.run(`${ID}`, `${json_red}`);
          stmt.finalize();
          console.log("done");
        }
      });
    });
  }
}
module.exports = Redirection_DB;
