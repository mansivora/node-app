module.exports = (app) => {
    const account = require('../controllers/user.controller.js');

    // Create a new account
    app.post('/signup', account.create);

    
    // Retrieve all Users
    app.get('/user', account.findAll);

    //Login user
    app.post('/login', account.login);

    // Delete a Note with noteId
    app.delete('/:userID', account.delete);
}