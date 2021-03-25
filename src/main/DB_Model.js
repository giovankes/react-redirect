const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("hike_red");

class DB_Model {
  constructor({ data }) {
    this.data = data;
  }

  update_redirect(id) {
    let redirection = this.data;
    let json_red = JSON.stringify(redirection);
    let duplicate_redirection = false;
    db.all("SELECT * FROM redirections", (e, r) => {
      r.map((result, key) => {
        if (result.id === id) {
          duplicate_redirection = true;
        } else {
          console.log("no");
        }
      });
      console.log(duplicate_redirection);
      if (duplicate_redirection === true) {
        //if the redirection is a dupe we want to update the appropiate
        //redirection, instead of adding  a new one
        //@@TODO: update redirection
        db.exec(
          `UPDATE redirections SET redirection = '${json_red}' WHERE id = '${ID}'`,
          (e) => {
            if (e) throw e;
            console.log("Updated");
          }
        );
      } else {
        //is it a new redirection? cool, then we just insert it into the
        //database
        const stmt = db.prepare(`INSERT INTO redirections VALUES(?,?)`);
        stmt.run(`${id}`, `${json_red}`);
        stmt.finalize();
        console.log("done");
      }
    });
  }
}

module.exports = DB_Model;
