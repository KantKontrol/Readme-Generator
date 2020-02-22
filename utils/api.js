let axios = require("axios");
const util = require("util");


const api = {

  getInfo: function(username, repoName) {

     let queryURL1 = `https://api.github.com/users/${username}`;

     let queryURL2 = `https://api.github.com/users/${username}/repos`;

     console.log('api token ' , process.env.API_TOKEN)
     const config = {
        method: 'get',
        headers:{
          'Authorization': `token ${process.env.API_TOKEN}`

        },
      };

      axios.get(queryURL1, config).then(function(response){

        console.log('response' , response)
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
