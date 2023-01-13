const {GraphQLList} = require("graphql")
const songType = require(".././types/songType")


module.exports = {
    type: new GraphQLList(songType),
    resolve: () => {return [{id: 1, title: "asdasd", year: 123}]}  
}