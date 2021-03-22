//modules
const fs = require("fs");
//variables
const path = "./api/src/redirection.json";
class Redirection_DB {
  constructor({ redirection }) {
    this.redirection = redirection;
  }

  read() {}

  //New redirection? cool: this function will create a new json file
  write() {
    //TODO: Write a function that creates a new json file with the correct
    //infrastructure to easily append new redirections to
  }

  //This function will be used to update a incoming redirection ontop of our
  //existing redirections;
  update() {
    //Check if updated Redirection is already in the json file
    //@TODO Check if redirection already exists by using the ID as key
    //
  }

  //Check if this is the first time we're writing a redirection.json file
  check() {
    //Is this the case?
  }
}

module.exports = Redirection_DB;
