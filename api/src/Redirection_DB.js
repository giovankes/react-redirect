const fs = require("fs");
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

    fs.writeFileSync(
      path,
      JSON.stringify(this.redirection),
      "utf8",
      function (e) {
        if (e) console.error(e);
        console.log("Done");
      }
    );
  }

  //This function will be used to update a incoming redirection ontop of our
  //existing redirections;
  update() {
    //Check if updated Redirection is already in the json file
    //@TODO Check if redirection already exists by using the ID as key
    let buffered_json = fs.readFileSync(path);
    let parsed_json = JSON.parse(buffered_json);
    let ID = this.redirection.id;

    if (parsed_json.id == ID) {
      //if this is the case, it means it's updating a redirection that's
      //already save, so we only have to update the existing values, instead of
      //appending a new one.
      //@TODO update existing redirection, either by updating the existing
      //values, or deleting them and appending a new one
      console.log("gottem bois");
      console.log(ID);
      console.log(parsed_json.id);
    } else {
      //Append new redirection to JSON file
      //@TODO append new redirection to JSON file
      console.log("Hey! new redirection");
      let json = [{ ...parsed_json, [ID]: this.redirection }];

      console.log(JSON.stringify(json));
      fs.writeFileSync(path, JSON.stringify(json), "utf8", function (e) {
        if (e) console.error(e);
        console.log("Done updating");
      });
    }
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
}

module.exports = Redirection_DB;
