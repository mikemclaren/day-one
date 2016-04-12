// Required for async/await, currently.
require('babel-polyfill');

import Koa from 'koa';
import convert from 'koa-convert';
import graphqlHTTP from 'koa-graphql';
import Router from 'koa-router';
import { grabGithubCommits } from './github-commits';

import { Schema } from './graphql/SCHEMA';

const app = new Koa();
const router = new Router();

grabGithubCommits();

app.use(async (ctx, next) => {
  try {
    await next();
  } catch(err) {
    if(err.status === 401) {
      ctx.body = { message: 'Unauthorized access.' };
      ctx.status = 401;
    } else {
      ctx.body = { message: err.message };
      ctx.status = err.status || 500;
    }
  }
});

router.get('/query', convert(graphqlHTTP((request, context) => ({
  schema: Schema,
  graphiql: true
}))));

router.post('/query', convert(graphqlHTTP((request, context) => ({
  schema: Schema
}))));

app.use(router.routes());

app.listen(3100);
console.log('Server up and running! On port 3100!');
