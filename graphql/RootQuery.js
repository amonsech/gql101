import { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLNonNull } from 'graphql';
import AuthorType from './AuthorType'
import authorDAO from '../persist/authorDAO';

export default new GraphQLObjectType({
    name: 'RootQuery',
    description: 'Descripcion opcional',
    fields: {
        authors: {
            type: GraphQLList(AuthorType),
            resolve: (root, args, info, ast) => authorDAO.getAll()
        }
    }
});