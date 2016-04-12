import {
  GraphQLString,
  GraphQLObjectType
} from 'graphql';

import AuthorType from './AuthorType';

let CommitType = new GraphQLObjectType({
  name: 'Commit',
  description: 'A Github commit for the Day-One repo!',
  fields: () => ({
    url: {
      type: GraphQLString,
      description: 'The URL for the commit'
    },
    author: {
      type: AuthorType,
      description: 'The author of the commit',
      resolve: (root) => {
        return root.author;
      }
    },
    time: {
      type: GraphQLString,
      description: 'The time of the commit'
    },
    message: {
      type: GraphQLString,
      description: 'The message for the commit'
    },
    sha: {
      type: GraphQLString,
      description: 'The SHA hash of the commit'
    }
  })
});

export default CommitType;
