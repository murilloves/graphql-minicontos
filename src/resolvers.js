const Tale = require('./Tale');

module.exports = {
    Query: {
        tales: () => Tale.find(),
        tale: (_, { id }) => Tale.findById(id),
    },

    Mutation: {
        createTale: (_, { title, text }) => Tale.create({ title, text }),
    }
}

