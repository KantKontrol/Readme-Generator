let axios = require("axios");
const util = require("util");

const api = {

  dataSet: {
    email: "",
    picURL: "",
  },

  getInfo: function(username) {

     let queryURL1 = `https://api.github.com/users/${username}`;

     const config = {
        method: 'get',
        headers:{
          'Authorization': `token ${process.env.API_TOKEN}`

        },
      };

      axios.get(queryURL1, config).then(function(response){
      
        api.dataSet.email = response.data.email;
        api.dataSet.picURL = response.data.avatar_url;
  
      });
      
      return this.dataSet;
  }
}


module.exports = {
  api: api
};
