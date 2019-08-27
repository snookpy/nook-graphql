const monggoose = require('mongoose')
const Schema = monggoose.Schema

const authorSchema = new Schema({
    name: String,
    age: Number
})

module.exports = monggoose.model('Author', authorSchema)