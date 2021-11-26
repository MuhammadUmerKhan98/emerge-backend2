const graphql = require("graphql");
const graphqlData = require("graphql-iso-date");

require("dotenv").config();

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

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    //Mutation API's
  },
});

module.exports = Mutation;
