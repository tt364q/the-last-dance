// require mongoose
const mongoose = require('mongoose');
//create a shortcut variable for Schema
const Schema = mongoose.Schema;


//create a championshipSchema
const championshipSchema = new Schema( {
    title: {
        type: String,
        required: true
    },
    body: String
}, { timestamps: true });

module.exports = mongoose.model('championship', championshipSchema);
