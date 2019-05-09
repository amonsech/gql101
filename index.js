import express from 'express';
import expressGraphQL from 'express-graphql';
import { connect } from './persist/MongoClient';
import schema from './graphql/schema';

connect();

const app = express();

app.use(expressGraphQL({
    schema,
    graphiql:true
}));

app.listen(8080);