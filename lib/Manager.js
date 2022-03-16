const Employee = require ('./Employee.js')

class Manager extends Employee {
    constructor(name, employeeID, email, officeNumber) {
        super(name, employeeID, email);

        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'manager';
    }
}

module.exports = Manager;