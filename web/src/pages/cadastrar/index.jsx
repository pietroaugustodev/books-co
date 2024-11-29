import { useState } from "react";
import Cabecalho from "../../components/cabecalho";
import Menu from "../../components/menu";
import "./index.scss";
import { useAsyncError } from "react-router-dom";


function Cadastrar() {
    
    const [img, setImg] = useState("");
    const [nome, setNome] = useState("");
    const [autor, setAutor] = useState("");
    const [idioma, setIdioma] = useState("");
    const [sinopse, setSinopse] = useState("");
    const [editora, setEditora] = useState("");
    const [isbn, setIsbn] = useState(null);
    const [publicacao, setPublicacao] = useState("")
    const [disponivel, setDisponivel ] = useState(null);
    
    
    return(
        <div id="pag-cadastrar">
            <Menu menuSelecionado="cadastrar" />
            <div id="tela">
                <Cabecalho />
                <main>
                    <form action="" method="post">
                        <div id="titulo">
                            <div></div>
                            <p>Cadastrar Novo Livro</p>
                        </div>
                        <div id="campos">
                            <section id="s1">
                                <div>
                                    <input type="file" />
                                    <img src="/assets/images/icon-upload.svg" alt="icon-upload" />
                                </div>
                            </section>

                            <section id="s2">
                                <article>
                                    <div className="campo">
                                        <div className="nomes-campos">
                                            <label htmlFor="">Nome: </label>
                                        </div>
                                        <div >
                                            <input type="text" placeholder="Nome do Livro" />
                                        </div>
                                    </div>
                                    
                                    <div className="campo">
                                        <div className="nomes-campos">
                                            <label htmlFor="">Autor: </label>
                                        </div>
                                        <div >
                                            <input type="text" placeholder="Nome do Autor"/>
                                        </div>
                                    </div>

                                    <div className="campo">
                                        <div className="nomes-campos">
                                            <label htmlFor="">Idioma: </label>
                                        </div>
                                        <div >
                                            <select name="" id="">
                                                <option value="">Selecione</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="campo">
                                        <div className="nomes-campos">
                                            <label htmlFor="">ISBN: </label>
                                        </div>
                                        <div >
                                            <input type="text" placeholder="Número do ISBN"/>
                                        </div>
                                    </div>
                                    
                                </article>

                                <article>
                                    <div className="campo">
                                        <div  className="nomes-campos">
                                            <label htmlFor="">Qtd. Páginas: </label>                                
                                        </div>
                                        <div >
                                            <input type="text" placeholder="0"/>
                                        </div>
                                    </div>

                                    <div className="campo">
                                        <div  className="nomes-campos">
                                            <label htmlFor="">Preço: </label>
                                        </div>
                                        <div >
                                            <input type="text" placeholder="0"/>
                                        </div>
                                    </div>

                                    <div className="campo" id="campo-disponivel">
                                        <div className="nomes-campos" id="campo">
                                            <input type="checkbox" />
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
                                        <input type="text" placeholder="Nome da Editora"/>
                                    </div>
                                </article>
                                
                                <article className="campo">
                                    <div className="nomes-campos">
                                        <label htmlFor="">Edição: </label>
                                    </div>
                                    <div >
                                        <input type="text" placeholder="Versão da Edição" />
                                    </div>
                                </article>

                                <article className="campo">
                                    <div className="nomes-campos">
                                        <label htmlFor="">Publicação: </label>
                                    </div>
                                    <div >
                                        <input type="date" name="" id="" />
                                    </div>
                                </article>

                                <article className="campo">
                                    <div id="sinopse"  className="nomes-campos">
                                        <label htmlFor="">Sinopse: </label>
                                    </div>
                                    <div >
                                        <textarea name="" id="" placeholder="Sinopse do livro"></textarea>
                                    </div>
                                </article>
                                
                                <button>SALVAR</button>
                            </section>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    )
}

export default Cadastrar;