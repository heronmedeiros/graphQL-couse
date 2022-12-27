'use strict';

const express        = require('express');
// const expressGraphQL = require('express-graphql');
var { graphqlHTTP } = require('express-graphql');

const app = express();


app.use('/graphql', graphqlHTTP({
    graphiql: true
}));


app.listen(4000, () => {
    console.log('listening on 4000')
});