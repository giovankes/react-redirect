
class DB_Model{
  constructor({data}){
    this.data = data;
  }
  
   update_redirect(){
     let redirection = this.data;
     console.log(redirection)
  }
  
}

module.exports=  DB_Model
