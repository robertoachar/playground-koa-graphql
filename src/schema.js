import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import CountryQueries from './country/CountryQueries';
import CountryMutations from './country/CountryMutations';

const Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      ...CountryQueries
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      ...CountryMutations
    }
  })
});

export default Schema;
