import { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLNonNull } from 'graphql';
import PostType, { PostInputType } from './PostType';
import postDAO from '../persist/postDAO';

export default new GraphQLObjectType({
    name: 'RootMutation',
    fields: {
        createPost: {
            args: {
                post: {
                    type: PostInputType
                }
            },
            type: PostType,
            resolve: (root, args) => postDAO.save(args.post)
        }
    }
});