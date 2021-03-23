const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("hike_red");
const fs = require("fs");
class Redirection_DB {
  constructor({ redirection }) {
    this.redirection = redirection;
  }

  __init__() {
    let json_red = JSON.stringify(this.redirection);
    db.serialize(function () {
      db.run("CREATE TABLE IF NOT EXISTS redirection (redirections TEXT)");

      var stmt = db.prepare("INSERT INTO redirection VALUES(?)");
      stmt.run(`"'${json_red}'"`);
      stmt.finalize();
    });
  }

  write() {
    console.log("lmao");
  }
}

module.exports = Redirection_DB;
