import express from "express";
import { ApolloServer } from "@apollo/server";
import {expressMiddleware} from "@apollo/server/express4";
import { prismaClient } from "./lib/db";

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
        type Mutation {
            createUser(firstName: String!, lastName: String!, email: String!, password: String!) : Boolean
        }
    `;

    const resolvers = {
        Query : {
            hello : () => `Hey, there I am a graphql server`,
            say : (_ : unknown, {name} : {name : String}) => `Hey ${name}, How are you ?`,
        },
        Mutation : {
            createUser :  async (_: unknown, {firstName, lastName, email, password} : 
                {firstName : string, lastName : string, email : string, password : string}
            ) => {
                await prismaClient.user.create({
                    data : {
                        firstName,
                        lastName,
                        email,
                        password,
                        salt : "random_salt"
                    }
                });
                return true;
            }
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

