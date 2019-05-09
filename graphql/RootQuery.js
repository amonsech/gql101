import { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLNonNull } from 'graphql';
import AuthorType from './AuthorType'

export default new GraphQLObjectType({
    name: 'RootQuery',
    description: 'Descripcion opcional',
    fields: {
        authors: {
            type: GraphQLList(AuthorType),
        }
    }
});