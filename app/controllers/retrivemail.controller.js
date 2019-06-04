const Addmail = require('../models/retrivemail.model.js');
const server = require('../../server.js');
exports.findOne = (req, res) => {
    var col = server.getCollection('accounts');
    col.findOne({public: req.params.public})
    .then(mailadd => {
        if(!mailadd) {
            console.log(">>>" ,res.body, mailadd)
            return res.status(404).send({
                message: "Mail address not found with id " + req.params.public
            });            
        }
        res.send(mailadd.email);
    }).catch(err => {
        console.log(err)
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Mail address not found with id " + req.params.public
            });                
        }
        return res.status(500).send({
            message: "Error retrieving with Mail address " + req.params.public
        });
    });
};




    


 
