const mongoose = require("mongoos");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true},
    authors: { type: String, required: true},
    description: String, 
    imageURL: String,
    linkURL: String
})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;