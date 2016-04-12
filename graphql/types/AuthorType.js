import {
  GraphQLString,
  GraphQLObjectType
} from 'graphql';

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
    }
  })
});

export default AuthorType;
