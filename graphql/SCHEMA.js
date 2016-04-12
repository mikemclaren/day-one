import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString
} from 'graphql';

import CommitType from './types/CommitType';
import AuthorType from './types/AuthorType';
import Commit from './models/Commit';
import Author from './models/Author';

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
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve: Author.fetchAll
    }
  })
});

let Schema = new GraphQLSchema({
  query: QueryType
});

export { Schema };
