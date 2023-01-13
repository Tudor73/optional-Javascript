const express = require("express");
// const JWTMiddleware = require('./middlewares/JWTMiddleware');
// const { graphqlHTTP } = require('express-graphql');
// const app = express();


// const schema = require('./graphql');
// app.use(express.json());

// app.post('/graphql', JWTMiddleware, graphqlHTTP({
//     schema: schema,
// }));

// app.listen(5000);
const db = require('./models/index.js')
async function main() {
    try{
        await db.sequelize.sync({ force: true });
    }
    catch(e) {
        console.log(e)
    }
}

main().then(console.log("All models were synchronized successfully."))