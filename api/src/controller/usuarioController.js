import Router from "express"; 
import { cadastrarLivro, login } from "../repository/usuarioRepository.js";


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




















usuarioEndpoints.post("/livro", async (req, resp) => {
    try {

        const infoLivro = req.body;

        if(!infoLivro.idUsuario) throw new Error("Id do usuário não identificado.");
        if(!infoLivro.nome) throw new Error("Nome do livro não identificado.");
        if(!infoLivro.autor) throw new Error("Nome do autor não identificado.");
        if(!infoLivro.isbn) throw new Error ("ISBN do livro não identificado.");
        if(!infoLivro.editora) throw new Error ("Editora do livro não identificada.");
        if(!infoLivro.edicao) throw new Error ("Edição do livro não identificada.");
        if(!infoLivro.sinopse) throw new Error ("Sinopse do livro não identificada.");
        if(!infoLivro.publicacao) throw new Error ("Data de publicação do livro não identificada.");
        if(!infoLivro.idioma) throw new Error ("Idioma do livro não identificado.");
        if(!infoLivro.disponivel) throw new Error ("Disponibilidade do livro não identificada.");
        if(!infoLivro.qtdPaginas) throw new Error ("Quantidade de páginas não identificada.")
        if(!infoLivro.preco) throw new Error ("Preço do livro não identificado.");

        infoLivro.id = await cadastrarLivro(infoLivro);

        resp.send(infoLivro);

    }   catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})






















export default usuarioEndpoints;