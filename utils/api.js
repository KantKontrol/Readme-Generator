let axios = require("axios");






const api = {

  

  getInfo: function(username, repoName) {

     let queryURL1 = `https://api.github.com/users/${username}`;

     let queryURL2 = `https://api.github.com/users/${username}/repos`;

     const config = {
        method: 'get',
        headers:{
          'User-Agent': 'KantKontrol'
        }
      };

      axios.get(queryURL,config).then(function(response){

        let retrieved = response.data.filter(e => e.name.toLowerCase() == repoName.toLowerCase());

        console.log(retrieved);

        //let data = [];

        //data.push(retrieved)
  
        }).catch(function(error){

          console.log(error);
        })
  }
};

module.exports = {
  api: api
};
