const mongoose = require('mongoose');
const { Schema } = mongoose;


const category = new Schema({
    name: { type: String, require: true, unique: true }
})

module.exports = {
    Category: mongoose.model('Category', category)
}
