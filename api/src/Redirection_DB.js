const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("hike_red");
const fs = require("fs");

let sql_select = `SELECT * FROM IF EXISTS redirection`;
class Redirection_DB {
  constructor({ redirection }) {
    this.redirection = redirection;
  }
  //This'll write the new redirection to the database
  //@TODO: Only write new redirections.
  write() {
    let ID = this.redirection.id;
    console.log(this.redirection);
    let json_red = JSON.stringify(this.redirection);
    db.serialize(function () {
      db.run(
        "CREATE TABLE IF NOT EXISTS redirection (id TEXT, redirection TEXT)"
      );
      const stmt = db.prepare(`INSERT INTO redirection VALUES(?,?)`);

      stmt.run(`"${ID}"`, `"${json_red}"`);
      stmt.finalize();
    });
    // db.all(sql_select, [], (e, r) => {
    //   if (e) throw e;
    //   if (r.length <= 0) return;
    //   r.forEach((row) => {
    //     console.log(row.redirections);
    //   });
    // });
  }
}
module.exports = Redirection_DB;
