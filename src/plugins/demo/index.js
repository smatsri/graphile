const { makeExtendSchemaPlugin, gql } = require("postgraphile");

exports.MyDemoPlugin = makeExtendSchemaPlugin(build => {
  return {
    typeDefs: gql`
    type AddResponse {
      res: Float
    }
    extend type Query {
      add(x:Float!, y:Float!): AddResponse
    }

    input CreateItemInput {
      title: String!
      description: String
    }

    type CreateResponse {
      success: Boolean
    }

    extend type Mutation {
      createItem(input:CreateItemInput!): CreateResponse
    }
  `,
    resolvers: {
      Query: {
        async add(_, { x, y }) {
          return { res: x + y };
        },
      },
      Mutation: {
        createItem(_, req) {
          console.log('req', req);
          return { success: true }
        },
        createCity(resolver) {
          console.log('createCity middleware');
          return resolver()
        }
      }
    },
  };
});

