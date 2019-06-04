module.exports = (app) => {
    const mailadd = require('../controllers/retrivemail.controller.js');

    
    // Retrieve all mail addresses
    app.get('/mailadd/:public', mailadd.findOne);

   

   
}