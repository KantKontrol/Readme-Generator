let axios = require("axios");
const util = require("util");


const api = {

  getInfo: function(username, repoName) {

     let queryURL1 = `https://api.github.com/users/${username}`;

     let queryURL2 = `https://api.github.com/users/${username}/repos`;

     const config = {
        method: 'get',
        headers:{
          'User-Agent': 'KantKontrol'
        },
        auth: {
          username: 'KantKontrol',
          password: ''
        }
      };

      axios.get(queryURL1, config).then(function(response){


        console.log(response.data.name);
        console.log(response.data.email);
    
    
        return axios.get(queryURL2, config);
      }).then(function(response){
    
        let retrieved = response.data.filter(e => e.name.toLowerCase() == repoName.toLowerCase());
    
        console.log(retrieved);
    
    
      }).catch(function(error){
    
        console.log(error);
      })

  }
}


module.exports = {
  api: api
};
