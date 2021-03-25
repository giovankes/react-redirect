const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("hike_red");


module.exports = {read_database}
