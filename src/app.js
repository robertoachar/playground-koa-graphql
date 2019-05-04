import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import helmet from 'koa-helmet';

import router from './router';
import graphqlRouter from './graphql';

const app = new Koa();

app.use(helmet());
app.use(cors());
app.use(bodyParser());
app.use(router.routes(), router.allowedMethods());
app.use(graphqlRouter.routes(), graphqlRouter.allowedMethods());

export default app;
