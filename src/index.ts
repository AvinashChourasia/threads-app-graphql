import express from "express";
import { ApolloServer } from "@apollo/server";
import {expressMiddleware} from "@apollo/server/express4";

async function init() {

    const app = express();
    const PORT = Number(process.env.PORT) || 8000;

    // app.use(cors());
    app.use(express.json());

    const typeDefs = `#graphql
        type Query {
            hello : String
            say(name : String) : String
        }
    `;

    const resolvers = {
        Query : {
            hello : () => `Hey, there I am a graphql server`,
            say : (_ : unknown, {name} : {name : String}) => `Hey ${name}, How are you ?`,
        }
    };

    const gqlServer = new ApolloServer({
        typeDefs, // Schema
        resolvers
    });

    await gqlServer.start();

    app.get("/", (req,res) => {
        res.json({message : "Server is up and running"});
    })

    app.use("/graphql", expressMiddleware(gqlServer) as express.Express);

    app.listen(PORT, () => {
        console.log(`Server started at Port ${PORT}`)
    });
    
}

init();

