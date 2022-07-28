const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groundSchema = new Schema({
    title: String,
    price: String,
    location: String,
    description: String
});
module.export = mongoose.model('gnd',groundSchema);