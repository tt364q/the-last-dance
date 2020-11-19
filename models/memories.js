// require mongoose
const mongoose = require('mongoose');
//create a shortcut variable for Schema
const Schema = mongoose.Schema;


//create a memorySchema
const memorySchema = new Schema( {
    title: String,
}, { timestamps: true });

module.exports = mongoose.model('Memory', memorySchema);