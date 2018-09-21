module.exports = (app) => {
    const projects = require('../controllers/createproject.controller.js');

    // Create a new Note
    app.post('/projects', projects.create);

    // Retrieve all Notes
    app.get('/projects', projects.findAll);

    // Retrieve a single Note with noteId
    app.get('/projects/:projectId', projects.findOne);

   
}