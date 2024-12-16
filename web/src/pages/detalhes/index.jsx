import { useEffect, useState } from "react";
import Cabecalho from "../../components/cabecalho";
import Menu from "../../components/menu";
import "./index.scss"
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { BuscarImagemLivro, BuscarLivroPorId } from "../../api/livroApi";


function Detalhes() {
    
    const {id} = useParams();
    const [livro, setLivro] = useState({});
    
    async function carregarLivro() {
        try {
            let respLivro = await BuscarLivroPorId(id)
            respLivro.capa = BuscarImagemLivro(respLivro.capa);

            setLivro(respLivro);

        } catch(err) {
            toast.error(err.response.data.erro)
        }
    }
    
    
    useEffect(() => {
        carregarLivro();
    }, [])
    
    
    return(
        <div id="pag-detalhe">
            <Menu />
            <div id="tela">
                <Cabecalho />
                <main>
                    <article>
                        <img src={livro.capa} alt="capa-livro" />
                        <div id="info">
                            <div id="titulo">
                                <h3>{livro.nome}</h3>
                                <p>por <b>{livro.autor} - {livro.qtdPaginas} págs.</b></p>
                            </div>

                            <div id="info-preco">
                                <p>por apenas</p>
                                <p>
                                    <b id="preco">R$ {livro.preco} </b>
                                    à vista 
                                    <b> ou em até </b>
                                    10x sem juros
                                </p>
                            </div>

                            <div id="sinopse">
                                <p className="titulo-detalhe">Sinopse</p>
                                <p>{livro.sinopse}</p>
                            </div>

                            <div id="detalhes-tecnicos">
                                <div>
                                    <p className="titulo-detalhe">ISBN</p>
                                    <img src="/assets/images/icon-isbn.svg" alt="icon-isbn" />
                                    <p>{livro.isbn}</p>
                                </div>

                                <div>
                                    <p className="titulo-detalhe">Editora</p>
                                    <img src="/assets/images/icon-editora.svg" alt="icon-editora" />
                                    <p>{livro.editora}</p>
                                </div>

                                <div>
                                    <p className="titulo-detalhe">Lançamento</p>
                                    <img src="/assets/images/icon-lancamento.svg" alt="icon-lancamento"/>
                                    <p>{new Date(livro.publicacao).toLocaleDateString()}</p>
                                </div>

                                <div>
                                    <p className="titulo-detalhe">Idioma</p>
                                    <img src="/assets/images/icon-idioma.svg" alt="icon-idioma"/>
                                    <p>{livro.idioma}</p>
                                </div>

                                <div>
                                    <p className="titulo-detalhe">Disponível</p>
                                    <img src="/assets/images/icon-disponivel.svg" alt="icon-disponivel"/>
                                    <p>{livro.disponivel == 1 ? "Sim" : "Não"}</p>
                                </div>
                            </div>
                        </div>
                    </article>
                </main>
            </div>
        </div>
    )
}

export default Detalhes;