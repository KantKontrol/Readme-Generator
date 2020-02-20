let axios = require("axios");


let queryURL = "https://api.github.com/users/";

const api = {
   getUser: function(username) {
     queryURL+=username;
     axios.get(queryURL).then(function(response){

      //console.log(response);

      console.log(`User Avatar URL: ${response.data.avatar_url}`);
      console.log(`User Email: ${response.data.email}`);

     });

  }
};

module.exports = {
  api: api
};
