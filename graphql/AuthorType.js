import { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLNonNull } from 'graphql';
import postDAO from '../persist/postDAO';
import PostType from './PostType';

export default new GraphQLObjectType({
    name: 'AuthorType',
    fields: () => ({
        id: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        posts: {
            type: GraphQLList(PostType),
            resolve: (author) => postDAO.getForAuthorId(author.id)
        }
    })
})