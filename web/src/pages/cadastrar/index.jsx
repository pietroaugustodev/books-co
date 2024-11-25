import Cabecalho from "../../components/cabecalho";
import Menu from "../../components/menu";



function Cadastrar() {
    return(
        <div id="pag-cadastrar">
            <Menu menuSelecionado="cadastrar" />
            <div>
                <Cabecalho />
                <main>
                    <h1>Cadastrar</h1>
                </main>
            </div>
        </div>
    )
}

export default Cadastrar;