import { useEffect, useState } from "react";
import Cabecalho from "../../components/cabecalho";
import Menu from "../../components/menu";
import "./index.scss";
import { toast } from "react-toastify";
import { BuscarLivro, BuscarLivros } from "../../api/livroApi";


function Consultar() {
    
    const [livros, setLivros] = useState([]);
    const [buscaLivro, setBuscaLivro] = useState("");
    const [formaConsulta, setFormaConsulta] = useState("");
    const mostrarTabela = () => (
        <table>
            <div>
                <thead>
                    <th className="tamanhoPequeno id"> IDENTIFICAÇÃO </th>
                    <th className="tamanhoGrande"> LIVRO </th>
                    <th className="tamanhoMedio"> AUTOR </th>
                    <th className="tamanhoPequeno"> LANÇAMENTO </th>
                    <th className="campo-disponivel"> DISPONÍVEL </th>
                </thead>
            </div>
            <tbody>
                {livros.map((livro) => {
                    return(
                        <tr>
                            <td className="tamanhoPequeno id">#{livro.id}</td>
                            <td className="tamanhoGrande" >{livro.nome}</td>
                            <td className="tamanhoMedio">{livro.autor}</td>
                            <td className="tamanhoPequeno">{new Date(livro.publicacao).toLocaleString("pt-BR").substring(0, 10)}</td>
                            <td className="campo-disponivel">{livro.disponivel == 1 ? "Sim" : "Não"}</td>
                            <div>
                                <img src="/assets/images/icon-alter.svg" alt="icon-alter" />
                                <img src="/assets/images/icon-delete.svg" alt="icon-delete" />
                            </div>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
    const mostrarCard = () => (
        <section id="s-cards">
            <article>
                <div>
                    <img src="/assets/images/icon-alter.svg" alt="icon-alter" />
                    <img src="/assets/images/icon-delete.svg" alt="icon-remove"/>
                </div>
                <div id="conteudo">
                    <img src="/assets/images/capaDracula.jpg" alt="capa-livro" />
                    <div>
                        <div>
                            <h4>Harry Potter e a Pedra filosofal</h4>
                            <p>por <b> JFK. Howling - Inglês - 259 págs. </b> </p>
                        </div>

                        <div id="preco">
                            <p> por apenas </p>
                            <div>
                                <h3> R$ 59,00 </h3>
                                <p>à vista </p>
                            </div>
                            <p>ou até 10x sem juros</p>
                        </div>
                        
                        <div>
                            <p>Lançamento: <b>22 maio de 2002 </b></p>
                            <p>Editora: <b>Vivendo </b></p>
                            <p>ISB: <b> 1234567899875522 </b> </p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )


    async function buscarLivros() {
        try {

            let resp = await BuscarLivros();
            setLivros(resp);

        } catch(err) {
            toast.error(err)
        }
    }

    async function buscarLivro() {
        try {
            if(!formaConsulta) throw new Error("Antes de pesquisar por algo, é preciso selecionar a forma de exibição do conteúdo (card ou tabela).")

            let resp = await BuscarLivro(buscaLivro);
            
            setLivros(resp);

        } catch(err) {
            if(err.response)
                toast.error(err.response.data.erro)
            else
                toast.warn(err.message)
        }
    }

    function verificarTecla(e) {
        if(e.key == "Enter")
            buscarLivro();
    }

    useEffect(() => {
        buscarLivros();
    }, [])
    
    return(
        <div id="pag-consultar">
            <Menu menuSelecionado="consultar" formaConsultar={setFormaConsulta}/>
            <div id="tela">
                <Cabecalho />
                <main>
                    <section id="s-busca">
                        <div onKeyDown={verificarTecla}>
                            <input 
                                type="text" 
                                placeholder="Buscar livro pelo nome"
                                onChange={(e) => setBuscaLivro(e.target.value)}
                            />
                            <img 
                                src="/assets/images/icon-search.svg" 
                                alt="icon-search" 
                                onClick={buscarLivro}
                            />
                        </div>
                    </section>

                    { formaConsulta == "tabela" && mostrarTabela() }

                    { formaConsulta == "card" && mostrarCard() }
                    
                </main>
            </div>
        </div>
    )
}

export default Consultar;