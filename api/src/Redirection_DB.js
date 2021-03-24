const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("hike_red");
const fs = require("fs");
let sql_select = `SELECT * FROM redirection`;
//async function read_database() {
//  let result
//  db.serialize(async () => {
//    await db.get(sql_select, async (e, r) => {
//      if (e) console.error(e);
//      if (r.length > 0) {
//        result = r;
//      } else {
//        return;
//      }
//    });
//  });
//}

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
      db.run(
        "CREATE TABLE IF NOT EXISTS redirection (id INTEGER, redirection TEXT)"
      );
      const stmt = db.prepare(`INSERT INTO redirection VALUES(?,?)`);
      //if (Object.values(results).indexOf(ID) > -1) {
      //  console.log("yes");
      //} else {
      //  console.log("no");
      //}
      stmt.run(`${ID}`, `"${json_red}"`);
      stmt.finalize();

      db.all("SELECT * FROM redirection", (e, r) => {
        let results = r;
        results.map((result, key) => {
          if (Object.values(result).indexOf(ID) > -1) {
            console.log("yes");
          } else {
            console.log("no");
          }
        });
      });
    });
  }
}
module.exports = Redirection_DB;
