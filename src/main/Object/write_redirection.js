const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("hike_red");
function write_redirect(ID, string_redirection) {
  stmt = db.prepare("INSERT INTO redirections VALUES(?,?)", (e) => {
    if (e) throw e;
  });
  stmt.run(`${ID}`, `${string_redirection}`, (e) => {
    if (e) throw e;
  });
  stmt.finalize();
  console.log("done");
}

module.exports = write_redirect;
