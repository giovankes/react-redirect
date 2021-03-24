const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("hike_red");
const fs = require("fs");
let sql_select = `SELECT * FROM redirection`;

async function read_database() {
  db.serialize(async () => {
    await db.get(sql_select, async (e, r) => {
      if (e) console.error(e);
      if (r.length > 0) {
        result = r;
      } else {
        return;
      }
    });
  });
}

class Redirection_DB {
  constructor({ redirection }) {
    this.redirection = redirection;
  }
  //This'll write the new redirection to the database
  //@TODO: Only write new redirections.
  write() {
    let result = read_database();
    console.log(result);
    let ID = this.redirection.id;
    let duplicate_redirection = false;
    //Check if id is already in the database

    let json_red = JSON.stringify(this.redirection);
    db.serialize(function () {
      db.run(
        "CREATE TABLE IF NOT EXISTS redirection (id TEXT, redirection TEXT)"
      );
      const stmt = db.prepare(`INSERT INTO redirection VALUES(?,?)`);

      stmt.run(`"${ID}"`, `"${json_red}"`);
      stmt.finalize();
    });
  }
}
module.exports = Redirection_DB;
