import Cabecalho from "../../components/cabecalho";
import Menu from "../../components/menu";
import "./index.scss";


function Cadastrar() {
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

                                    <div>
                                        <label htmlFor="">Nome: </label>
                                        <input type="text" placeholder="Nome do Livro" />
                                    </div>

                                    <div>
                                        <label htmlFor="">Autor: </label>
                                        <input type="text" placeholder="Nome do Autor"/>
                                    </div>

                                    <div>
                                        <label htmlFor="">Idioma: </label>
                                        <select name="" id="">
                                            <option value="">Selecione</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="">ISBN: </label>
                                        <input type="text" placeholder="Número do ISBN"/>
                                    </div>
                                </article>

                                <article>

                                    <div>
                                        <label htmlFor="">Qtd. Páginas: </label>                                
                                        <input type="number" />
                                    </div>

                                    <div>
                                        <label htmlFor="">Preço: </label>
                                        <input type="text" />
                                    </div>
                                    
                                    <div>
                                        <input type="checkbox" />
                                        <label htmlFor="">Disponível</label>
                                    </div>
                                </article>
                            </section>

                            <section id="s3">
                                <div>
                                    <label htmlFor="">Editora: </label>
                                    <input type="text" placeholder="Nome da Editora"/>
                                </div>

                                <div>
                                    <label htmlFor="">Edição: </label>
                                    <input type="text" placeholder="Versão da Edição" />
                                </div>

                                <div>
                                    <label htmlFor="">Publicação: </label>
                                    <input type="date" name="" id="" />
                                </div>

                                <div>
                                    <label htmlFor="">Sinopse: </label>
                                    <textarea name="" id="" placeholder="Sinopse do livro"></textarea>
                                </div>
                                
                                <button>Salvar</button>
                            </section>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    )
}

export default Cadastrar;