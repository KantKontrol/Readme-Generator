let axios = require("axios");


let queryURL = "https://api.github.com/users/";



const api = {
   getUser: function(username, password) {
     queryURL+=username;

     const config = {
       method: 'get',
       headers:{
        'User-Agent': username
       },
       auth: {
         username: username,
         password: password
       }


      };

     
        console.log(queryURL);
        axios.get(queryURL,config).then(function(response){

          console.log(response.data);
    
    
          //console.log(`User Avatar URL: ${response.data.avatar_url}`);
          //console.log(`User Email: ${response.data.email}`);
    
         }).catch(function(error){

           console.log(error);
         })
    

      
        
      

  }
};

module.exports = {
  api: api
};
