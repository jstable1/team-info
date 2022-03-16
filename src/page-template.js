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
${generateManagerCard(teamArray)}
${generateEngineerCards(teamArray)}
${generateInternCards(teamArray)}
</body>
</html>
`
}

const generateManagerCard = teamArray => {
    return `
    <section class = "manager-card">
    ${teamArray
        .filter(( employee ) => employee.getRole() === 'manager')
        .map (( manager ) => {
            return `
            <div class = "name">
                ${manager.name} <br>
                <link rel="icon" type="image/x-icon" href="https://img.icons8.com/fluency-systems-filled/48/000000/coffee.png"/> Manager
            </div>
            <div class = "employee-info">
                ${manager.employeeID}
                ${manager.email}
                ${manager.github}
            </div>`
        })
        .join("")}
    </section>
    `
}

const generateEngineerCards = teamArray => {
    return `
    <section class = "engineer-cards">
    ${teamArray
        .filter(( employee ) => employee.getRole() === 'engineer')
        .map (( engineer ) => {
            return `
            <div class = "name">
                ${engineer.name} <br>
                <link rel="icon" type="image/x-icon" href="<img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-glasses-banking-and-finance-kiranshastry-lineal-kiranshastry.png"/> Engineer
            </div>
            <div class = "employee-info">
                ${engineer.employeeID}
                ${engineer.email}
                ${engineer.github}
            </div>`
        })
        .join("")}
    </section>
    `
}

const generateInternCards = teamArray => {
    return `
    <section class = "intern-cards">
    ${teamArray
        .filter(( employee ) => employee.getRole() === 'intern')
        .map (( intern ) => {
            return `
            <div class = "name">
                ${intern.name} <br>
                <link rel="icon" type="image/x-icon" href="<img src="https://img.icons8.com/material-sharp/24/000000/student-female.png"/> Intern
            </div>
            <div class = "employee-info">
                ${intern.employeeID}
                ${intern.email}
                ${intern.school}
            </div>`
        })
        .join("")}
    </section>
    `
}

module.exports = createHTML