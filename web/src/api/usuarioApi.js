import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:5000" 
})


export async function Logar(email, senha){

    const resp = await api.post("/usuario", {
        "email": email,
        "senha": senha
    })

    return resp.data;
}




























































export async function CadastrarLivro(infoLivro, idUsuario){
    
    const resp = await api.post('/livro', {
        nome: infoLivro.nome,
        autor: infoLivro.autor,
        idioma: infoLivro.idioma,
        isbn: infoLivro.isbn,
        qtdPaginas: infoLivro.qtdPaginas,
        preco: infoLivro.preco,
        disponivel: infoLivro.disponivel,
        editora: infoLivro.editora,
        publicacao: infoLivro.publicacao,
        sinopse: infoLivro.sinopse,
        edicao: infoLivro.edicao,
        idUsuario: idUsuario
    });

    return resp.data;
}