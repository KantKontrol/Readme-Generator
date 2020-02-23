let axios = require("axios");

const api = {

  getInfo: async function(username) {

     let queryURL1 = `https://api.github.com/users/${username}`;

     const config = {
        method: 'get',
        headers:{
          'Authorization': `token ${process.env.API_TOKEN}`

        },
      };

      let response = await axios.get(queryURL1, config);

      return { email: response.data.email, picURL: response.data.avatar_url};
  }
}


module.exports = {
  api: api
};
