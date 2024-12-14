import Cabecalho from "../../components/cabecalho";
import Menu from "../../components/menu";
import "./index.scss"


function Detalhes() {
    return(
        <div id="pag-detalhe">
            <Menu />
            <div id="tela">
                <Cabecalho />
                <main>
                    <article>
                        <img src="/assets/images/capaDracula.jpg" alt="capa-livro" />
                        <div id="info">
                            <div id="titulo">
                                <h3>Programming Languages Design Concepts</h3>
                                <p>por <b>Bram Stoker - 240 págs.</b></p>
                            </div>

                            <div id="info-preco">
                                <p>por apenas</p>
                                <p>
                                    <b id="preco">R$ 223,00 </b>
                                    à vista 
                                    <b> ou em até </b>
                                    10x sem juros
                                </p>
                            </div>

                            <div id="sinopse">
                                <p className="titulo-detalhe">Sinopse</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus pulvinar finibus. Etiam et finibus magna. Duis scelerisque hendrerit sem. Nullam cursus lectus at magna iaculis, eget egestas nibh malesuada. Aliquam ipsum magna, pharetra at dictum at, convallis et erat. Sed auctor euismod dolor in varius. Mauris in nunc eget risus tristique tempor. Sed semper euismod arcu, in euismod turpis volutpat non.</p>
                            </div>

                            <div id="detalhes-tecnicos">
                                <div>
                                    <p className="titulo-detalhe">ISBN</p>
                                    <img src="/assets/images/icon-isbn.svg" alt="icon-isbn" />
                                    <p>656565656565</p>
                                </div>

                                <div>
                                    <p className="titulo-detalhe">Editora</p>
                                    <img src="/assets/images/icon-editora.svg" alt="icon-editora" />
                                    <p>Vivendo</p>
                                </div>

                                <div>
                                    <p className="titulo-detalhe">Lançamento</p>
                                    <img src="/assets/images/icon-lancamento.svg" alt="icon-lancamento"/>
                                    <p>15/05/2002</p>
                                </div>

                                <div>
                                    <p className="titulo-detalhe">Idioma</p>
                                    <img src="/assets/images/icon-idioma.svg" alt="icon-idioma"/>
                                    <p>Inglês</p>
                                </div>

                                <div>
                                    <p className="titulo-detalhe">Disponível</p>
                                    <img src="/assets/images/icon-disponivel.svg" alt="icon-disponivel"/>
                                    <p>Sim</p>
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