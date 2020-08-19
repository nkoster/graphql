const port = 10020
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql')
const { query } = require('express')
const app = express()
const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'HellowOrld',
        fields: _ => ({
            message: {
                type: GraphQLString,
                resolve: (parent, args) => 'Hellow Orld'
            }
        })
    })
})

const rootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: _ => {}
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(port, _ => console.log(`listening to ${port}`))
