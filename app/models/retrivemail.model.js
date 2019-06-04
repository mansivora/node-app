const mongoose = require('mongoose');

const AddressSchema = mongoose.Schema({

    email: {type:String},
    password:{type:String},
    phone: {type:String},
    status : {type:String},
    public : {type:String},
    phrase : {type:String},
    reset : {type:String},
    _bcrypt : {type:String},
    MerchantName : {type:String}
}, {
    timestamps: true
});

module.exports = mongoose.model('Addmail', AddressSchema);
