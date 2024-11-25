import Cabecalho from "../../components/cabecalho";
import Menu from "../../components/menu";



function Consultar() {
    return(
        <div id="pag-consultar">
            <Menu menuSelecionado="consultar"/>
            <div>
                <Cabecalho />
                <main>
                    <h1>Consultar</h1>
                </main>
            </div>
        </div>
    )
}

export default Consultar;