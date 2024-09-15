import express from "express";
import cors from 'cors';
import * as dotenv from 'dotenv';
import mongooseConnector from "./mongoDb/mongooseConnector.js";
import postRoutes from "./routes/post.routes.js"
import dalleRoutes from "./routes/dalle.routes.js"

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async(req, res)=>{
    res.send("hello from backend");
})

const startServer = async ()=>{

    try{
        mongooseConnector(process.env.MONGOO_URL);
    }catch(e){
        console.log(e, "while calling mongooseConnector() in index.js");
    }

    app.listen(8080, ()=>{
        console.log("server is stared on 8080 port");
    })
}

startServer();