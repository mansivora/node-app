const User = require('../models/user.model');
const bcrypt = require('bcrypt');

// Create account and Save
exports.create = (req, res) => {
   
    //Find user 
    User.find({email: req.body.email})
        .exec()
        .then(user => {
            if (user.length >= 1){
                res.status(409).send({
                    message: "User already exist."
               });
            } else{
                    // Create a User
                bcrypt.hash(req.body.password, 10, (err,hash) => {
                if(err){
                    return res.status(500).send({
                    error: err
                });
            }else{
                const user = new User({
                    FirstName: req.body.firstname,
                    LastName: req.body.lastname,
                    email: req.body.email,
                    password: hash,
                    usertype:req.body.usertype
            });
            // Save Note in the database
                user.save()
                .then(data => {
                    res.send(data);
                }).catch(err => {
                     res.status(500).send({
                         message: err.message || "Some error occurred while creating the account."
                    });
                });
            }
        });
            }
        });
    } 

    // Retrieve and return all users from the database.
    exports.findAll = (req, res) => {
        User.find()
        .then(user => {
            res.send(user);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving users."
            });
        });
    };


    exports.login = (res,req ) => {
        User.find({email: req.body.email })
        .exec()
        .then(user =>{
            if(user.length < 1){
                return res.status(404).send({
                    message: "mail not found. User doesn't exist!"
                });
            }
            bcrypt.compare(req.body.password, user[0].password, (err,res) =>{
                if(err){
                    return res.status(401).send({
                        message: "Auth Failed"
                    });
                }
                if(result){
                    return res.status(200).send({
                        message: "Auth successfull"
                    });
                }
                res.status(200).send({
                    message: "Auth Failed"
                    });
                });
            })
        .catch(err =>{
            console.log(err);
            res.status(500).send({
                error:err
            });
        });
    }

    exports.delete = (req, res, next) => {
        User.remove({_id: req.params.userID})
        .then(user => {
            if(!user){
                return res.status(404).send({
                    message: "User not found! " + req.params.userID
                });
            }
                res.send({message: "Successfully deleted user"});
            
        
        }).catch(err => {
            if(err.kind === 'userID' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userID
                });                
            }
            return res.status(500).send({
                message: "Could not delete user with id " + req.params.userID
            });
        });
    };
            
    
        



