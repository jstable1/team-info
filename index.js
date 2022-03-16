const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const createHTML = require('./src/page-template.js');
const fs = require('fs');
let teamArray = [];

const createManager = () => {
    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is the team manager's name?",
        },
        {
            type: 'number',
            name: 'employeeID',
            message: "What is the team manager's employee ID?",
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the team manager's email?",
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: "What is the team manager's office phone number?",
        }
    ]) .then (answers => {
        let manager = new Manager (answers.name, answers.employeeID, answers.email, answers.officeNumber);
        teamArray.push(manager)
        createMenu()
    })
}

const createMenu = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choicesMenu',
            message: 'Would you like to add a new engineer or intern to your team?',
            choices: ['New Engineer', 'New Intern', 'Finish'],
            validate: choiceMenu => {
                if (choiceMenu) {
                    return true;
                } else {
                    console.log('How would you like to continue?')
                    return false;
                }
            }
        },
    ]) .then (answers => {
        if (answers.choicesMenu === 'New Engineer') {
            createEngineer()
        } else if (answers.choicesMenu === 'New Intern') {
            createIntern()
        } else {
            fs.writeFile('./dist/index.html', createHTML(teamArray), err => {
                if (err) {
                    console.log(err)
                  return;
                }
                console.log('index.html successfully created!')
              });
        }
    })
}

const createEngineer = () => {
    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is the engineer's name?",
        },
        {
            type: 'number',
            name: 'employeeID',
            message: "What is the engineer's employee ID?",
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the engineer's email?",
        },
        {
            type: 'text',
            name: 'github',
            message: "What is the engineer's github username?",
        }
    ]) .then (answers => {
        let engineer = new Engineer (answers.name, answers.employeeID, answers.email, answers.github);
        teamArray.push(engineer)
        createMenu()
    })
}

const createIntern = () => {
    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is the intern's name?",
        },
        {
            type: 'number',
            name: 'employeeID',
            message: "What is the intern's employee ID?",
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the intern's email?",
        },
        {
            type: 'text',
            name: 'school',
            message: "What school does the intern attend?",
        }
    ]) .then (answers => {
        let intern = new Intern (answers.name, answers.employeeID, answers.email, answers.school);
        teamArray.push(intern)
        createMenu()
    })
}

createManager()