import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLList
} from 'graphql';

import Commit from '../models/Commit';
import CommitType from './CommitType';

let AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: 'A Github commit author',
  fields: () => ({
    login: {
      type: GraphQLString,
      description: 'The author\'s username'
    },
    name: {
      type: GraphQLString,
      description: 'The name of the author'
    },
    id: {
      type: GraphQLString,
      description: 'The id of the author'
    },
    email: {
      type: GraphQLString,
      description: 'The email address of the author'
    },
    commits: {
      type: new GraphQLList(CommitType),
      description: 'The commits this user has given',
      resolve: (root) => {
        return Commit.processCommits(root.commits);
      }
    }
  })
});

export default AuthorType;
