import { useEffect, useState } from "react";
import Cabecalho from "../../components/cabecalho";
import Menu from "../../components/menu";
import "./index.scss";
import { toast } from "react-toastify"
import { BuscarImagemLivro, BuscarLivroPorId, CadastrarImagemLivro, CadastrarLivro } from "../../api/livroApi.js";
import storage from "local-storage"
import { useParams } from "react-router-dom";


function Cadastrar() {
    
    const [nome, setNome] = useState("");
    const [autor, setAutor] = useState("");
    const [idioma, setIdioma] = useState("");
    const [sinopse, setSinopse] = useState("");
    const [editora, setEditora] = useState("");
    const [isbn, setIsbn] = useState();
    const [publicacao, setPublicacao] = useState("")
    const [disponivel, setDisponivel] = useState(false);
    const [qtdPaginas, setQtdPaginas] = useState();
    const [preco, setPreco] = useState();
    const [edicao, setEdicao] = useState("");
    const idUsuario = storage("usuario-logado").id
    const [imagem, setImagem] = useState("");
    const { id } = useParams();

    async function cadastrarLivro() {
        try{
            if(!imagem) throw new Error("Imagem não selecionada.");

            const infoLivro = await CadastrarLivro({
                    nome: nome, 
                    autor: autor,
                    idioma: idioma,
                    edicao: edicao,
                    publicacao: publicacao,
                    sinopse: sinopse,
                    isbn: isbn,
                    qtdPaginas: qtdPaginas,
                    preco: preco,
                    editora: editora,
                    disponivel: disponivel
                }, idUsuario)
            await CadastrarImagemLivro(imagem, infoLivro.id)

            toast.success("Livro cadastrado!");
            limparCampos();

        } catch(err) {
            if(err.response)
                toast.error(err.response.data.erro)
            else
                toast.error(err.message)
        }
    }

    function selecionarImagem() {
        document.getElementById("inputFile").click();
    }

    function limparCampos() {
        setNome("");
        setAutor("");
        setPublicacao("");
        setIdioma("");
        setEdicao("");
        setEditora("");
        setQtdPaginas("");
        setPreco("");
        setIsbn("");
        setDisponivel(false);
        setSinopse("");
        setImagem("")
    }

    function exibirImagem() {
        if(typeof(imagem) == "object")
            return URL.createObjectURL(imagem)
        else {
            return imagem
        }

    }

    async function completarCampos() {
        try {
            const infoLivro = await BuscarLivroPorId(id);
            console.log(infoLivro);
            
            setNome(infoLivro.nome);
            setAutor(infoLivro.autor);
            setIdioma(infoLivro.idioma);
            setSinopse(infoLivro.sinopse);
            setEdicao(infoLivro.edicao);
            setDisponivel(infoLivro.disponivel);
            setPublicacao(infoLivro.publicacao.substring(0, 10));
            setQtdPaginas(infoLivro.qtdPaginas);
            setPreco(infoLivro.preco);
            setIsbn(infoLivro.isbn);
            setEditora(infoLivro.editora);
            setImagem(BuscarImagemLivro(infoLivro.capa));

        } catch(err) {
            toast.error(err.response.data.erro)
        }
    }

    useEffect(() => {
        if(id)
            completarCampos();
    }, [])

    return(
        <div id="pag-cadastrar">
            <Menu menuSelecionado="cadastrar" />
            <div id="tela">
                <Cabecalho />
                <main>
                    <div id="form">
                        <div id="titulo">
                            <div></div>
                            <p>Cadastrar Novo Livro</p>
                        </div>
                        <div id="campos">
                            <section id="s1">
                                <div onClick={selecionarImagem}>
                                    <input type="file" id="inputFile" onChange={(e) => setImagem(e.target.files[0])}/>
                                    {  imagem 
                                        ? <img id="capa" src={exibirImagem()} alt="icon-upload" /> 
                                        : <img src="/assets/images/icon-upload.svg" alt="icon-upload" />
                                    }
                                </div>
                            </section>

                            <section id="s2">
                                <article>
                                    <div className="campo">
                                        <div className="nomes-campos">
                                            <label htmlFor="">Nome: </label>
                                        </div>
                                        <div >
                                            <input 
                                                type="text"
                                                placeholder="Nome do Livro" 
                                                value={nome}
                                                onChange={(e) => setNome(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="campo">
                                        <div className="nomes-campos">
                                            <label htmlFor="">Autor: </label>
                                        </div>
                                        <div >
                                            <input 
                                                type="text"
                                                placeholder="Nome do Autor"
                                                value={autor}
                                                onChange={(e) => setAutor(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="campo">
                                        <div className="nomes-campos">
                                            <label htmlFor="">Idioma: </label>
                                        </div>
                                        <div >
                                            <select value={idioma} onChange={(e) => setIdioma(e.target.value)}>
                                                <option value="" disabled={true}>Selecione</option>
                                                <option value="Português"> Português </option>
                                                <option value="Inglês"> Inglês </option>
                                                <option value="Espanhol"> Espanhol </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="campo">
                                        <div className="nomes-campos">
                                            <label htmlFor="">ISBN: </label>
                                        </div>
                                        <div >
                                            <input 
                                                type="number" 
                                                placeholder="Número do ISBN"
                                                value={isbn}
                                                onChange={(e) => setIsbn(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    
                                </article>

                                <article>
                                    <div className="campo">
                                        <div  className="nomes-campos">
                                            <label htmlFor="">Qtd. Páginas: </label>                                
                                        </div>
                                        <div>
                                            <input 
                                                type="number" 
                                                placeholder={0}
                                                value={qtdPaginas}
                                                onChange={(e) => setQtdPaginas(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="campo">
                                        <div  className="nomes-campos">
                                            <label htmlFor="">Preço: </label>
                                        </div>
                                        <div >
                                            <input 
                                                type="number" 
                                                placeholder="0"
                                                value={preco}
                                                onChange={(e) => setPreco(e.target.value)} 
                                            />
                                        </div>
                                    </div>

                                    <div className="campo" id="campo-disponivel">
                                        <div className="nomes-campos" id="campo">
                                            <input 
                                                type="checkbox"
                                                checked={disponivel}
                                                onChange={(e) => setDisponivel(e.target.checked)}
                                            />
                                            <label htmlFor="">Disponível</label>
                                        </div>
                                    </div>

                                </article>
                            </section>

                            <section id="s3">
                                <article className="campo">
                                    <div className="nomes-campos">
                                        <label htmlFor="">Editora: </label>
                                    </div>
                                    <div >
                                        <input 
                                            type="text" 
                                            placeholder="Nome da Editora"
                                            value={editora}
                                            onChange={(e) => setEditora(e.target.value)}
                                        />
                                    </div>
                                </article>
                                
                                <article className="campo">
                                    <div className="nomes-campos">
                                        <label htmlFor="">Edição: </label>
                                    </div>
                                    <div >
                                        <input 
                                            type="text" 
                                            placeholder="Versão da Edição" 
                                            value={edicao}
                                            onChange={(e) => setEdicao(e.target.value)}
                                        />
                                    </div>
                                </article>

                                <article className="campo">
                                    <div className="nomes-campos">
                                        <label htmlFor="">Publicação: </label>
                                    </div>
                                    <div >
                                        <input 
                                            type="date"
                                            value={publicacao}
                                            onChange={(e) => setPublicacao(e.target.value)} 
                                        />
                                    </div>
                                </article>

                                <article className="campo">
                                    <div id="sinopse"  className="nomes-campos">
                                        <label htmlFor="">Sinopse: </label>
                                    </div>
                                    <div >
                                        <textarea 
                                            placeholder="Sinopse do livro"
                                            value={sinopse}
                                            onChange={(e) => setSinopse(e.target.value)}
                                        >
                                        </textarea>
                                    </div>
                                </article>
                                
                                <button onClick={cadastrarLivro}> {!id ? "Salvar" : "Alterar"}</button>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Cadastrar;