const monggoose = require('mongoose')
const Schema = monggoose.Schema

const bookSchema = new Schema({
    name: String,
    genre: String,
    authorId: String
})

module.exports = monggoose.model('Book', bookSchema)