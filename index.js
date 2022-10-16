// express setup 
import express  from "express";
import path from "path";
// import {apiRoutes, htmlRoutes} from "./routes/index.js";
const PORT = 5555

const app = express();

 // middleware for parsing, routes and static
app.use(express.json());
app.use(express.urlencoded({extended: true}))
// app.use(apiRoutes, htmlRoutes);
app.use(express.static("public"))
app.use((req,res,next)=>{
    res.status(404).send(path.join(__dirname, "./public/index.html"))
})
app.listen( PORT, 
    ()=>{
        console.log(`Port initiated at http://localhost:${PORT}`)
    }
)