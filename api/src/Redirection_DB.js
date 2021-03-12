const fs = require("fs");
const path = "./redirection.json";

class Redirection_DB {
  constructor({ redirection }) {
    this.redirection = redirection;
  }

  read() {}

  //New redirection? cool: this function will create a new json file
  write() {
    //TODO: Write a function that creates a new json file with the correct
    //infrastructure to easily append new redirections to
    console.log(this.redirection);
  }

  //This function will be used to update a incoming redirection ontop of our
  //existing redirections;
  update() {
    //console.log(this.redirection);
  }

  //Check if this is the first time we're writing a redirection.json file
  check() {
    //Is this the case?
    if (fs.existsSync(path)) {
      //Cool, then we have to append the incoming redirection onto our existing
      //redirections :)

      //TODO: write update function
      this.update();
    } else {
      //is this not the case?
      //then we have to write a new json file

      this.write();
    }
  }
  add({ props }){
    fs.writeFileSync('./works.json', JSON.stringify(props));
  }
}

module.exports = Redirection_DB;
