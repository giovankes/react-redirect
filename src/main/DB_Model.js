const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("hike_red");
const write_redirect = require("./Object/write_redirection.js")

class DB_Model {
  constructor({ data }) {
    const duplicate_redirection = false;
    this.data = data;
    this.duplicate_redirection = duplicate_redirection;
  }

  check(id) {
    let data = this.data;
    let duplicate_redirection = this.duplicate_redirection;
    db.serialize(function () {
      db.all(`SELECT * FROM redirections`, (e, r) => {
        if (e) throw e;
        r.map((row, key) => {
          if (row.id == id) {
            duplicate_redirection = true;
            update_redirect(id);
          } else {
            write_redirect({id:this.id, redirect:data})
          }
        });
      });
    });
  }
}

module.exports = DB_Model;
