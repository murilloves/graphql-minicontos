const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');

const express = require( `express` );
const graphqlHTTP = require( `express-graphql` );
const cors = require( `cors` );
const app = express();

app.use( cors() );
app.use(
	`/graphql`,
	graphqlHTTP({
		schema: path.resolve(__dirname, 'schema.graphql'),
		rootValue: resolvers,
		graphql: true
	})
);

mongoose.connect('mongodb://priscila:gnomo420@ds053874.mlab.com:53874/minicontos', {
    useNewUrlParser: true
});

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers
});

const opts = {
  port: 4000,
  cors: {
    origin: '*'
  }
};

server.start(opts, () =>
	console.log(`Server is running on https://git.heroku.com/minicontos.git:${opts.port}`)
);
