import express from "express"
import cors from "cors"
import "dotenv/config"
import usuarioEndpoints from "./controller/usuarioController.js"; 
import livroEndpoints from "./controller/livroController.js";

const server = express();

server.use(cors()); 
server.use(express.json())

server.use(usuarioEndpoints)
server.use(livroEndpoints)
server.use('/storage/capaLivro', express.static('storage/capaLivro'));


server.listen(process.env.PORT, () => console.log(`API subiu na port ${process.env.PORT}`));