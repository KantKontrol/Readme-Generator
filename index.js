let inquire = require("inquirer");
let gitAPI = require("./utils/api");


const questions = [

];

inquire.prompt([
{ 
    type: "input",
    message: "What is your github username?",
    name: "username"
}

]).then(response => {

  
    console.log(gitAPI.api.getUser(response.username));
    


});

function writeToFile(fileName, data) {
}

function init() {

}

init();
