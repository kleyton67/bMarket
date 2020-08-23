import { ApolloServer } from 'apollo-server-express';
import { WebApp } from 'meteor/webapp';
import { getUser } from 'meteor/apollo';
import { LinksCollection } from '/imports/api/links';
import { SellerCollection } from '/imports/api/seller';
import typeDefs from '/imports/apollo/schema.graphql';

const resolvers = {
  Query: {
    getLink: (obj, { id }) => LinksCollection.findOne(id),
    getLinks: () => LinksCollection.find().fetch(),
  },
  QuerySeller:{
    getSeller: (obj, { id }) => SellerCollection.findOne(id),
    getSellers: () => SellerCollection.find.fetch()
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => ({
    user: await getUser(req.headers.authorization)
  })
});

server.applyMiddleware({
  app: WebApp.connectHandlers,
  path: '/graphql'
});

WebApp.connectHandlers.use('/graphql', (req, res) => {
  if (req.method === 'GET') {
    res.end();
  }
});
