import KoaRouter from 'koa-router';
import graphqlHttp from 'koa-graphql';

import CountrySchema from './country/CountrySchema';

const router = KoaRouter();

router.all(
  '/graphql',
  graphqlHttp({
    schema: CountrySchema,
    graphiql: true
  })
);

export default router;
