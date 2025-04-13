import express from "express";
import {expressMiddleware} from "@apollo/server/express4";
import createApolloGraphqlServer from "./graphql";

async function init() {

    const app = express();
    const PORT = Number(process.env.PORT) || 8000;

    // app.use(cors());
    app.use(express.json());

    const gqlServer = await createApolloGraphqlServer();

    app.get("/", (req,res) => {
        res.json({message : "Server is up and running"});
    })

    app.use("/graphql", expressMiddleware(gqlServer) as express.Express);

    app.listen(PORT, () => {
        console.log(`Server started at Port ${PORT}`)
    });
    
}

init();

