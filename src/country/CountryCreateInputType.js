import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

const CountryCreateInputType = new GraphQLInputObjectType({
  name: 'CountryCreateInputType',
  fields: {
    name: { type: GraphQLNonNull(GraphQLString) }
  }
});

export default CountryCreateInputType;
