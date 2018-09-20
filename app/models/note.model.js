const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    tittle: {type:String, required:true},
    description: {type:String, required:true},
    remark: {type:String, required:true},
    industry: {type:String, required:true}
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);
