const { makeExtendSchemaPlugin, gql,makePluginHook, makePgSmartTagsPlugin,makeAddInflectorsPlugin } = require("postgraphile")
//createActor
exports.UserPlugin = makeExtendSchemaPlugin(build => {
  console.log("[UserPlugin]")


  return {
    typeDefs: gql`
    extend type Mutation {
      createActor(input:CreateActorInput!):CreateActorPayload
    }
    
  `,
    resolvers: {
      Mutation: {
        createCity(_, req) {
          console.log('[req]', req);
          return { success: true }
        }
      }
    },

  };
});