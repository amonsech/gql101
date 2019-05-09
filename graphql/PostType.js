import { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLNonNull } from 'graphql';
import AuthorType from './AuthorType';
import authorDAO from '../persist/authorDAO';
import { GraphQLInputObjectType } from 'graphql/type';

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

export const PostInputType = new GraphQLInputObjectType({
    name: 'PostInputType',
    fields: {
        content: {
            type: GraphQLString
        },
        authorId: {
            type: GraphQLString
        }
    }
});