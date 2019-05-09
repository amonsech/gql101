import { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLNonNull } from 'graphql';
import AuthorType from './AuthorType';
import authorDAO from '../persist/authorDAO';

export default new GraphQLObjectType({
    name: 'PostType',
    fields: () => ({
        id: {
            type: GraphQLString
        },
        content: {
            type: GraphQLString
        },
        author: {
            type: AuthorType,
            resolve: (post) => authorDAO.get(post.authorId) 
        }
    })
})