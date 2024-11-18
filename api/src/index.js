import express from "express"
import cors from "cors"
import "dotenv/config"
import usuarioEndpoints from "./controller/usuarioController.js"; 

const server = express();

server.use(cors()); 
server.use(express.json())
server.use(usuarioEndpoints)

server.listen(process.env.PORT, () => console.log(`API subiu na port ${process.env.PORT}`));