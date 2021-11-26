const graphql = require("graphql");
const rootQueryObject = require("./schema/query.js");
const mutationObject = require("./schema/mutation.js");

const { GraphQLSchema } = graphql;

module.exports = new GraphQLSchema({
  query: rootQueryObject,
  mutation: mutationObject,
});
