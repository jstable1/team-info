const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Bruce', '6316846', 'bruce.banner@gmail.com');

    expect(employee.name).toBe('Bruce');
    expect(employee.employeeID).toBe('6316846');
    expect(employee.email).toBe('bruce.banner@gmail.com');
});