import Router from "express"; 
import { login } from "../repository/usuarioRepository.js";


const usuarioEndpoints = Router();


usuarioEndpoints.post('/usuario', async (req, resp) => {
    try{
        const {email, senha} = req.body;

        if(!email) throw new Error("Email não identificado.");
        if(!senha) throw new Error("Senha não identificada.");

        const dados = await login(email, senha);
        
        if(!dados) throw new Error("Usuário não identificado.");

        resp.send(dados);

    } catch(err){
        resp.status(401).send({
            erro: err.message
        })
    }
})




export default usuarioEndpoints;