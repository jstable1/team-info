const createHTML = teamArray => {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Info</title>
    <link rel="stylesheet" href="../dist/style.css">
</head>
<body>
<h2 class = "heading"> My Team </h2>
    <div class = "flex-row">
        ${generateManagerCard(teamArray)}
        ${generateEngineerCards(teamArray)}
        ${generateInternCards(teamArray)}
    </div>
</body>
</html>
`
}

const generateManagerCard = teamArray => {
    return `
    ${teamArray
        .filter(( employee ) => employee.getRole() === 'manager')
        .map (( manager ) => {
            return `
            <section class = "manager-card container">
                <h2 class = "name">
                    ${manager.name} <br>
                    ☕ Manager
                </h2>
                <div class = "employee-info">
                    <h3> ID: ${manager.employeeID} </h3>
                    <h3> Email: 
                        <a href="mailto:${manager.email}">${manager.email}</a>
                    </h3>
                    <h3> Office Number: ${manager.officeNumber} </h3>
                </div>
            </section>`
        })
        .join("")}
    `
}

const generateEngineerCards = teamArray => {
    return `
    ${teamArray
        .filter(( employee ) => employee.getRole() === 'engineer')
        .map (( engineer ) => {
            return `
            <section class = "engineer-cards container">
                <h2 class = "name">
                    ${engineer.name} <br>
                    👓 Engineer
                </h2>
                <div class = "employee-info">
                    <h3> ID: ${engineer.employeeID} </h3>
                    <h3> Email: 
                        <a href="mailto:${engineer.email}">${engineer.email}</a>
                    </h3>
                    <h3> Github: 
                        <a href="https://github.com/${engineer.github}">${engineer.github}</a>
                    </h3>
                </div>
            </section>`
        })
        .join("")}
    `
}

const generateInternCards = teamArray => {
    return `
    ${teamArray
        .filter(( employee ) => employee.getRole() === 'intern')
        .map (( intern ) => {
            return `
            <section class = "intern-cards container">
            <h2 class = "name">
                ${intern.name} <br>
                🧑‍🎓 Intern
            </h2>
            <div class = "employee-info">
                <h3>ID: ${intern.employeeID}</h3>
                <h3>Email: 
                    <a href="mailto:${intern.email}">${intern.email}</a>
                </h3>
                <h3>School: ${intern.school}</h3>
            </div>
            </section>`
        })
        .join("")}
    `
}

module.exports = createHTML