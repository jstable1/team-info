const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const createHTML = require('./src/page-template.js');
let teamArray = [];

const createManager = () => {
    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: 'What is the team managers name?',
        },
        {
            type: 'number',
            name: 'employeeID',
            message: 'What is the team managers employee ID?',
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is the team managers email?',
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
        } else {createHTML(teamArray)
            fs.writeFile('./dist/index.html', generateHTML(answers), err => {
                if (err) {
                    console.log(err)
                  return;
                }
                console.log('index.html successfully created!')
              });
        }
    })
}

createManager()