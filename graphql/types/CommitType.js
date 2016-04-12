import {
  GraphQLString,
  GraphQLObjectType
} from 'graphql';

let CommitType = new GraphQLObjectType({
  name: 'Commit',
  description: 'A Github commit for the Day-One repo!',
  fields: () => ({
    url: {
      type: GraphQLString,
      description: 'The URL for the commit'
    },
    author: {
      type: GraphQLString,
      description: 'The author of the commit'
    },
    time: {
      type: GraphQLString,
      description: 'The time of the commit'
    },
    message: {
      type: GraphQLString,
      description: 'The message for the commit'
    }
  })
});

export default CommitType;
