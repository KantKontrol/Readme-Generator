let inquire = require("inquirer");
let gitAPI = require("./utils/api");


const questions = [
    { 
        type: "input",
        message: "What is your github username?",
        name: "username"
    }

];

var prompt = inquire.createPromptModule();

prompt(questions).then(response => {

  
    gitAPI.api.getUser(response.username);
    


});

function writeToFile(fileName, data) {


}

function init() {

}

init();
