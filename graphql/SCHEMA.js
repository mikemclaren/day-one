import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString
} from 'graphql';

import CommitType from './types/CommitType';
import Commit from './models/Commit';

let QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    commits: {
      type: new GraphQLList(CommitType),
      resolve: Commit.fetchAll
    },
    commit: {
      type: CommitType,
      args: {
        sha: {
          name: 'sha',
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: Commit.fetchBySha
    }
  })
});

let Schema = new GraphQLSchema({
  query: QueryType
});

export { Schema };
