const createHTML = teamArray => {
    return `
    ${generateEngineerCards(teamArray)}`
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
            <div class = "employee-info"
                ${engineer.employeeID}
                ${engineer.email}
                ${engineer.github}
            </div>`
        })
        .join(' ')}
    </section>
    `
}

module.exports = createHTML