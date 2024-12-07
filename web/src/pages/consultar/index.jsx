import { useEffect, useState } from "react";
import Cabecalho from "../../components/cabecalho";
import Menu from "../../components/menu";
import "./index.scss";
import { toast } from "react-toastify";
import { BuscarLivro, BuscarLivros } from "../../api/livroApi";


function Consultar() {
    
    const [livros, setLivros] = useState([]);
    const [buscaLivro, setBuscaLivro] = useState("");
    
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

            let resp = await BuscarLivro(buscaLivro);
            console.log(resp);
            
            setLivros(resp);

        } catch(err) {
            toast.error(err.response.data.erro)
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
            <Menu menuSelecionado="consultar"/>
            <div id="tela">
                <Cabecalho />
                <main>
                    <section>
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
                </main>
            </div>
        </div>
    )
}

export default Consultar;