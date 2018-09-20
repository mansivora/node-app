const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);



const userSchema = mongoose.Schema({
    FirstName: {type:String, required:true},
    LastName: {type:String, required:true},
    email: {
        type:String, 
        required:true, 
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password:{type:String, required:true},
    usertype:{type:String, required:true}
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
