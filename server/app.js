const express = require('express')
const graphqlHTTP = require('express-graphql')
const mongoose = require('mongoose');

const app = express()
const schema =require('./schema/schema');

mongoose.connect('mongodb+srv://admin:1234@cluster-test-q2mh8.mongodb.net/test?retryWrites=true&w=majority')
mongoose.connection.once('open', () => {
    console.log('connected to database')
})

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }))

app.listen(4000, () => {
    console.log('now listening for requests on port 4000')
})
