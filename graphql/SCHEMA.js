import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList
} from 'graphql';

import CommitType from './types/CommitType';
import Commit from './models/Commit';

let QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    commits: {
      type: new GraphQLList(CommitType),
      resolve: Commit.fetchAll
    }
  })
});

let Schema = new GraphQLSchema({
  query: QueryType
});

export { Schema };
