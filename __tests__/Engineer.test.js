const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Bruce', '6316846', 'bruce.banner@gmail.com', 'bbanner');

    expect(engineer.name).toBe('Bruce');
    expect(engineer.employeeID).toBe('6316846');
    expect(engineer.email).toBe('bruce.banner@gmail.com');
    expect(engineer.github).toBe('bbanner');
});