import Cabecalho from "../../components/cabecalho";
import Menu from "../../components/menu";
import "./index.scss";

function Home(){
    return(
        <div id="pag-home">
            <Menu />
            <div>
                <Cabecalho />
                <main>
                    <img src="/assets/images/logo.svg" alt="logo" />
                </main>
            </div>
        </div>
    )
}

export default Home;