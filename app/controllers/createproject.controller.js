const Project = require('../models/createproject.model.js');

// Create and Save a new project
exports.create = (req, res) => {
   
  Project.find({tittle:req.body.tittle})
  .exec()
  .then(project =>{
      if(project.length >= 1){
          res.status(409).send({
              message: "Project Already exist."
          });
      }else{
          //Create a project
          const project = new Project({
            tittle: req.body.tittle ,
            description: req.body.description,
            remark: req.body.remark,
            industry: req.body.industry
        });
    
         // Save Project in the database
         project.save()
         .then(data => {
             res.send(data);
         }).catch(err => {
             res.status(500).send({
                 message: err.message || "Some error occurred while creating the Project."
             });
         });
     };
    });
};
    
 

 

// Retrieve and return all projects from the database.
exports.findAll = (req, res) => {
    Project.find()
    .then(projects => {
        res.send(projects);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving projects."
        });
    });
};

// Find a single project with a projectID
exports.findOne = (req, res) => {
    Project.findById(req.params.projectId)
    .then(project => {
        if(!project) {
            return res.status(404).send({
                message: "Project not found with id " + req.params.projectId
            });            
        }
        res.send(project);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Project not found with id " + req.params.projectId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving project with id " + req.params.projectId
        });
    });
};



    


 
