import { useEffect, useState } from "react";
import Cabecalho from "../../components/cabecalho";
import Menu from "../../components/menu";
import "./index.scss";
import { toast } from "react-toastify";
import { BuscarImagemLivro, BuscarLivro, BuscarLivros, DeletarLivro } from "../../api/livroApi";
import { confirmAlert } from "react-confirm-alert"; 
import { useNavigate } from "react-router-dom";
import storage from "local-storage"

function Consultar() {
    
    const [livros, setLivros] = useState([]);
    const [buscaLivro, setBuscaLivro] = useState("");
    const [formaConsulta, setFormaConsulta] = useState(storage("info-app") ? storage("info-app").formaConsulta : "");
    const navigate = useNavigate();
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
                                <img 
                                    src="/assets/images/icon-alter.svg" 
                                    alt="icon-alter" 
                                    onClick={() => navigate(`/alterar/${livro.id}`)}
                                />
                                <img 
                                    src="/assets/images/icon-delete.svg" 
                                    alt="icon-delete"
                                    onClick={() => deletarLivro(livro)}
                                />
                            </div>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
    const mostrarCard = () => (
        <section id="s-cards">
            {livros.map((livro) => {
                
                return ( 
                    <article>
                        <div>
                            <img 
                                src="/assets/images/icon-alter.svg" 
                                alt="icon-alter" 
                                onClick={() => navigate(`/alterar/${livro.id}`)}
                            />
                            <img 
                                src="/assets/images/icon-delete.svg"
                                alt="icon-remove"
                                onClick={() => deletarLivro(livro)}    
                            />
                        </div>
                        <div id="conteudo">
                            <img src={livro.capa} alt="capa-livro" />
                            <div>
                                <div>
                                    <h4>{livro.nome}</h4>
                                    <p>por <b> {livro.autor} - {livro.idioma} - {livro.qtdPaginas} págs. </b> </p>
                                </div>

                                <div id="preco">
                                    <p> por apenas </p>
                                    <div>
                                        <h3> R$ {livro.preco} </h3>
                                        <p>à vista </p>
                                    </div>
                                    <p>ou até 10x sem juros</p>
                                </div>
                                
                                <div>
                                    <p>Lançamento: <b> {formatarData(livro.publicacao)} </b></p>
                                    <p>Editora: <b>{livro.editora} </b></p>
                                    <p>ISB: <b> {livro.isbn} </b> </p>
                                </div>
                            </div>
                        </div>
                    </article>
                )})}
        </section>
    )

    async function deletarLivro(livro) {
        try {
            confirmAlert({
                title: "Deletar livro",
                message: `Tem certeza que deseja deletar o livro "${livro.nome}"?`,
                buttons: [
                    {
                        label: "Sim",
                        onClick: async () => {
                            await DeletarLivro(livro.id);
                            toast.success(`O livro ${livro.nome} foi deletado com sucesso.`)
                            buscarLivros();
                        }
                    },
                    {
                        label: "Não"
                    }
                    
                ]
            })

        } catch(err){
            toast.error(err.response.data.erro);
        }
    }

    async function buscarLivros() {
        try {

            let resp = await BuscarLivros();
            
            for(let c = 0; c < resp.length; c++)
                resp[c].capa = BuscarImagemLivro(resp[c].capa);
            
            setLivros(resp)

        } catch(err) {
            toast.error(err)
        }
    }

    function formatarData(data) {
        let mes = "";

        switch(data.substring(5, 7)) {
            case "1":
                mes = "janeiro";
                break;
            case "2":
                mes = "fevereiro";
                break;
            case "3":
                mes = "março";
                break;
            case "4":
                mes = "abril";
                break;
            case "5":
                mes = "maio";
                break;
            case "6":
                mes = "junho";
                break;
            case "7":
                mes = "julho";
                break;
            case "8":
                mes = "agosto";
                break;
            case "9":
                mes = "setembro";
                break;
            case "10":
                mes = "outubro";
                break;
            case "11":
                mes = "novembro";
                break;
            case "12":
                mes = "dezembro";
                break;
        }
        
        return `${data.substring(8, 10)} de ${mes} de ${data.substring(0, 4)}`;
    }

    async function buscarLivro() {
        try {
            if(!formaConsulta) throw new Error("Antes de pesquisar por algo, é preciso selecionar a forma de exibição do conteúdo (card ou tabela).")

            let resp = await BuscarLivro(buscaLivro);
            
            for(let cont = 0; cont < resp.length; cont++)
                resp[cont].capa = BuscarImagemLivro(resp[cont].capa);

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