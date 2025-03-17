const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    price: Number,
    description: String,
});
module.exports = mongoose.model('Book', bookSchema);