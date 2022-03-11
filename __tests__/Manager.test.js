const Manager = require('../lib/Manager.js');

test('creates an manager object', () => {
    const manager = new Manager('Bruce', '6316846', 'bruce.banner@gmail.com', '801-123-4567');

    expect(manager.name).toBe('Bruce');
    expect(manager.employeeID).toBe('6316846');
    expect(manager.email).toBe('bruce.banner@gmail.com');
    expect(manager.officeNumber).toBe('801-123-4567');
});