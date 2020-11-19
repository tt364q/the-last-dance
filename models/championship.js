// require mongoose
const mongoose = require('mongoose');
//create a shortcut variable for Schema
const Schema = mongoose.Schema;


//create a championshipSchema
const championshipSchema = new Schema( {
    titleYear: Number,
    shoes: String,
    ppg: Number,
    apg: Number,
    rpg: Number,
    opponent: String,
}, { timestamps: true });

module.exports = mongoose.model('championship', championshipSchema);
