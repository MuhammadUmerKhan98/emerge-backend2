const graphql = require("graphql");
const graphqlData = require("graphql-iso-date");

const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLSchema,
  GraphQLID,
  GraphQLFloat,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

const { GraphQLDate, GraphQLTime, GraphQLDateTime } = graphqlData;

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    //Query API's
  },
});

module.exports = RootQuery;
