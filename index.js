let inquire = require("inquirer");
let gitAPI = require("./utils/api");


const questions = [
    { 
        type: "input",
        message: "What is your github username?",
        name: "username"
    },
    { 
        type: "password",
        message: "What is your github password?",
        name: "password"
    }

];

var prompt = inquire.createPromptModule();

prompt(questions).then(response => {

  
    gitAPI.api.getUser(response.username, response.password);
    


});

function writeToFile(fileName, data) {


}

function init() {

}

init();
