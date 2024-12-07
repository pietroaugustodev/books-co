import { Router } from "express";
import multer from "multer";
import { buscarLivroPorNome, cadastrarImagemLivro, cadastrarLivro, deletarLivro } from "../repository/livroRepository.js";
import { buscarLivros } from "../repository/livroRepository.js";

const livroEndpoints = Router();
const upload = multer({dest: "storage/capaLivro"});


livroEndpoints.post("/livro", async (req, resp) => {
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
        if(infoLivro.disponivel == undefined || infoLivro.disponivel == null) throw new Error ("Disponibilidade do livro não identificada.");
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

livroEndpoints.put("/livro/:id/imagem", upload.single("capa"), async (req, resp) => {
    try{
        if(!req.file) throw new Error("Imagem da capa não identificada.");
        
        const imagem = req.file.path;
        const idUsuario = Number(req.params.id);
        
        if(!idUsuario || idUsuario < 1 || isNaN(idUsuario)) throw new Error("ID do usuário não identificado ou inválido.");
        
        const affectedRows = await cadastrarImagemLivro(imagem, idUsuario);
        if(affectedRows != 1) throw new Error("Imagem da capa não podê ser cadastradas.");

        resp.status(204).send();

    } catch(err){
        resp.status(400).send({
            erro: err.message
        }) 
    }
}) 

livroEndpoints.get("/livros", async (req, resp) => {
    try {

        const resposta = await buscarLivros();

        resp.send(resposta);

    } catch(err) {
        resp.status(500).send({
            erro: err.message
        })
    }
})

livroEndpoints.get("/livros/livro", async (req, resp) => {
    try {

        const nome = req.query.nome;
        
        const resposta = await buscarLivroPorNome(nome);

        resp.send(resposta);

    } catch(err) {
        resp.status(500).send({
            erro: err.message
        })
    }
})

livroEndpoints.delete("/livro/:id", async (req, resp) => {
    try {

        const id = Number(req.params.id);
        
        const affectedRows = await deletarLivro(id);
        
        if(affectedRows != 1) throw new Error ("O livro não pôde ser deletado.");

        resp.status(204).send();

    } catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default livroEndpoints;