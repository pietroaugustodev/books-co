import Cabecalho from "../../components/cabecalho";
import Menu from "../../components/menu";
import "./index.scss";


function NotFound() {

    return(
        <div id="pag-not-found">
            <Menu />
            <div id="tela">
                <Cabecalho />
                <main>
                    <h1>Not found</h1>
                    <img src="/assets/images/logo.svg" alt="logo"/>
                </main>
            </div>
        </div>
    )
}

export default NotFound;