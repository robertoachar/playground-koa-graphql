import { GraphQLNonNull } from 'graphql';

import CountryCreateInputType from './CountryCreateInputType';
import CountryType from './CountryType';
import countries from './countries';

const CountryMutations = {
  createCountry: {
    type: CountryType,
    args: {
      input: {
        type: GraphQLNonNull(CountryCreateInputType)
      }
    },
    resolve: (root, { input }) => {
      const country = {
        id: Math.random().toString(),
        name: input.name
      };
      countries.push(country);

      return country;
    }
  }
};

export default CountryMutations;
