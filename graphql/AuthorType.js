import { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLNonNull } from 'graphql';

export default new GraphQLObjectType({
    name: 'AuthorType',
    fields: () => ({
        id: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        }
    })
})