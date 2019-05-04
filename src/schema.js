import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import CountryQueries from './country/CountryQueries';
import CountryMutations from './country/CountryMutations';

const Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      ...CountryQueries
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutation',
    fields: {
      ...CountryMutations
    }
  })
});

export default Schema;
