const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Bruce', '6316846', 'bruce.banner@gmail.com', 'X-Mansion');

    expect(intern.name).toBe('Bruce');
    expect(intern.employeeID).toBe('6316846');
    expect(intern.email).toBe('bruce.banner@gmail.com');
    expect(intern.school).toBe('X-Mansion');
});