const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("hike_red");
const write_redirect = require("./functions/write_redirection.js");

class DB_Model {
  constructor({ data }) {
    const duplicate_redirection = false;
    this.data = data;
    this.duplicate_redirection = duplicate_redirection;
  }

  check(ID, string_redirection) {
    let data = this.data;
    let duplicate_redirection = this.duplicate_redirection;
    db.serialize(function () {
      db.all(`SELECT * FROM redirections`, (e, r) => {
        if (e) throw e;
        console.log("checked");
        console.log(r);
        if (r.length !== 0) {
          r.map((row, key) => {
            console.log("map");
            if (row.id == id) {
              duplicate_redirection = true;
              update_redirect(id);
              console.log("ues");
            } else {
              console.log("no");
              write_redirect(ID, string_redirection);
            }
          });
        }else{
          //If no results are in the database yes we can just write the
          //redirection without checking if it's a duplicate
          write_redirect(ID, string_redirection);
        }
      });
    });
  }
}

module.exports = DB_Model;
