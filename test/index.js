

describe('My first test', () => {                                                                                                                                                                          
    const redirection;                                                                                                                                                                                       
    before(() => {                                                                                                                                                                                           
      // @TODO this would be a better name. Write_json is wrong because it is not what the class is about                                                                                                    
      redirection = new Redirection_DB();                                                                                                                                                                    
    });                                                                                                                                                                                                      
    it('Creates new redirection.json with one redirect added', () => {                                                                                                                                       
      redirection.add({ REDIRECTION_OBJECT });                                                                                                                                                               
      // @TODO assertions go here                                                                                                                                                                            
    });                                                                                                                                                                                                      
  });    
