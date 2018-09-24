module.exports = (app) => {
    const projects = require('../controllers/createproject.controller.js');

    // Create a new Project
    app.post('/projects', projects.create);

    // Retrieve all Projects
    app.get('/projects', projects.findAll);

    // Retrieve a single Project with ProjectId
    app.get('/projects/:projectId', projects.findOne);

   
}