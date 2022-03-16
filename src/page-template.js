const createHTML = teamArray => {
    return `
    ${generateManagerCard(teamArray)}
    ${generateEngineerCards(teamArray)}
    ${generateInternCards(teamArray)}`
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
                <link rel="icon" type="image/x-icon" href="https://img.icons8.com/fluency-systems-filled/48/000000/coffee.png"/> Engineer
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
                <link rel="icon" type="image/x-icon" href="https://img.icons8.com/fluency-systems-filled/48/000000/coffee.png"/> Engineer
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
                <link rel="icon" type="image/x-icon" href="https://img.icons8.com/fluency-systems-filled/48/000000/coffee.png"/> Engineer
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