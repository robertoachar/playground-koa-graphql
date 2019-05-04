import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

const CountryCreateInput = new GraphQLInputObjectType({
  name: 'CountryCreateInput',
  fields: {
    name: { type: GraphQLNonNull(GraphQLString) }
  }
});

export { CountryCreateInput };
