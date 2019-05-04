import KoaRouter from 'koa-router';
import graphqlHttp from 'koa-graphql';
import { buildSchema } from 'graphql';

const router = KoaRouter();

router.all(
  '/graphql',
  graphqlHttp({
    schema: buildSchema(`
      type Queries {
        hello: String!
      }

      type Mutations {
        sayHello(name: String!): String!
      }

      schema {
        query: Queries
        mutation: Mutations
      }
    `),
    rootValue: {
      hello: () => {
        return 'Hello GraphQL';
      },
      sayHello({ name }) {
        return `Hello ${name}`;
      }
    },
    graphiql: true
  })
);

export default router;
