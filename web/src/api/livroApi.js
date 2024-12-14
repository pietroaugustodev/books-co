import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000"
})

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

export async function CadastrarImagemLivro(imagem, idLivro){
    
    const formData = new FormData();
    console.log(formData);
    console.log(imagem);
    
    
    formData.append('capa', imagem)
    console.log(formData);
    
    
    await api.put(`/livro/${idLivro}/imagem`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    })
}  

export async function BuscarLivros() {
    const resp = await api.get("/livros");

    return resp.data;
}

export async function BuscarLivro(busca) {
    const resp = await api.get(`/livros/livro?nome=${busca}`);

    return resp.data;
}

export function BuscarImagemLivro(imagem) {
    return `${api.getUri()}/${imagem}`;
}

export async function DeletarLivro(idLivro) {
    await api.delete(`/livro/${idLivro}`);
}

export async function BuscarLivroPorId(idLivro) {
    const resp = await api.get(`/livro/${idLivro}`);

    return resp.data;
}