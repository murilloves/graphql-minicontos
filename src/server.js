const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');

mongoose.connect('mongodb://priscila:gnomo420@ds053874.mlab.com:53874/minicontos', {
    useNewUrlParser: true
});

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers
})

server.start();
