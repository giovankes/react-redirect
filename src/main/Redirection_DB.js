const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("hike_red");
const DB_Model = require("./DB_Model.js");
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

    let dbmodel = new DB_Model({ data: this.redirection });

    dbmodel.update_redirect({ id: ID });
  }
}

module.exports = Redirection_DB;
