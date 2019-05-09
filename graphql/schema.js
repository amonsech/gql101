import { GraphQLSchema } from 'graphql';
import RootQuery from './RootQuery.js'

export default new GraphQLSchema({
    query: RootQuery
});