import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema
} from 'graphql';

import { CountryCreateInput } from './CountryInput';
import CountryType from './CountryType';
import countries from './countries';

const CountrySchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'CountryQuery',
    fields: {
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
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'CountryMutation',
    fields: {
      createCountry: {
        type: CountryType,
        args: {
          input: {
            type: GraphQLNonNull(CountryCreateInput)
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
    }
  })
});

export default CountrySchema;
