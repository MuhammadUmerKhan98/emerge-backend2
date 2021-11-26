const graphql = require("graphql");
const graphqlData = require("graphql-iso-date");
const userModel = require("../models/user");

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

const jwtToken = new GraphQLObjectType({
  name: "jwtToken",
  fields: () => ({
    token: {
      type: GraphQLString,
    },
    createdAt: {
      type: GraphQLDateTime,
    },
  }),
});

const loggedDevicesType = new GraphQLObjectType({
  name: "loggedDevices",
  fields: () => ({
    _id: {
      type: GraphQLID,
    },
    deviceId: {
      type: GraphQLString,
    },
    jwtToken: {
      type: jwtToken,
    },
  }),
});

const userType = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    _id: {
      type: GraphQLID,
    },
    jwtToken: {
      type: jwtToken,
    },
    firstName: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    userRole: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
    phone: {
      type: GraphQLFloat,
    },
    createdAt: {
      type: GraphQLDateTime,
    },
    isRegistered: {
      type: GraphQLBoolean,
    },
    profileStatus: {
      type: GraphQLBoolean,
    },
    status: {
      type: GraphQLString,
    },
    gender: {
      type: GraphQLString,
    },
    country: {
      type: GraphQLString,
    },
    city: {
      type: GraphQLString,
    },
    code: {
      type: GraphQLString,
    },
    primeGuardianFirstName: {
      type: GraphQLString,
    },
    primeGuardianLastName: {
      type: GraphQLString,
    },
    secGuardianFirstName: {
      type: GraphQLString,
    },
    secGuardianLastName: {
      type: GraphQLString,
    },
    primeGuardianEmail: {
      type: GraphQLString,
    },
    secGuardianEmail: {
      type: GraphQLString,
    },
    applicationStatus: {
      type: GraphQLString,
    },
    knowThrough: {
      type: GraphQLList(GraphQLString),
    },
    birthday: {
      type: GraphQLString,
    },
    profileImage: {
      type: GraphQLString,
    },
    coverImage: {
      type: GraphQLString,
    },
    bio: {
      type: GraphQLString,
    },
    grade: {
      type: GraphQLString,
    },
    institute: {
      type: GraphQLString,
    },
    isJob: {
      type: GraphQLBoolean,
    },
    isMaster: {
      type: GraphQLBoolean,
    },
    isInter: {
      type: GraphQLBoolean,
    },
    isPaid: {
      type: GraphQLBoolean,
    },
    personalityType: {
      type: GraphQLString,
    },
    profileLink: {
      type: GraphQLString,
    },
  }),
});

module.exports = {
  userType,
};
