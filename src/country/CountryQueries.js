import { GraphQLID, GraphQLList, GraphQLNonNull } from 'graphql';

import CountryType from './CountryType';
import countries from './countries';

const CountryQueries = {
  countries: {
    type: GraphQLList(CountryType),
    resolve: () => countries
  },
  country: {
    type: CountryType,
    args: {
      id: {
        type: GraphQLNonNull(GraphQLID)
      }
    },
    resolve: (root, { id }) => countries.find((c) => c.id === id)
  }
};

export default CountryQueries;
