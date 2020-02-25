let inquire = require("inquirer");
const fs = require("fs");
let gitAPI = require("./utils/api");
const gm = require("./utils/generateMarkdown");
const util = require("util");
require('dotenv').config()


const questions = [
    { 
        type: "input",
        message: "What is your github username?",
        name: "username"
    },
    { 
        type: "input",
        message: "What is the name of the repo?",
        name: "title"
    },
    { 
        type: "input",
        message: "what do you want the description to be?",
        name: "desc"
    },
    { 
        type: "input",
        message: "how do you install your project?",
        name: "install"
    },
    { 
        type: "input",
        message: "How do you use your project?",
        name: "usage"
    },
    { 
        type: "input",
        message: "Did you use any Licenses?",
        name: "license"
    },
    { 
        type: "input",
        message: "Are there more contributors?",
        name: "contributors"
    }
];


async function writeToFile(fileName, data) {

    let markDown = await gm.generate(data);

    fs.writeFile(fileName, markDown, function(err){
        if(err){
            console.log(err);
        }
    });
}

async function init() {

    var prompt = inquire.createPromptModule();
    let response = await prompt(questions);

    let data = await gitAPI.api.getInfo(response.username);

    data.username = response.username;
    data.title = response.title;
    data.desc = response.desc;
    data.usage = response.usage;
    data.contributors = response.contributors;
    data.license = response.license;
    data.install = response.install;

    writeToFile("readme.md", data);
    
}

init();
