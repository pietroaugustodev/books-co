import { Link } from "react-router-dom";
import "./index.scss";

function Menu(props) {

    function verificarMenuSelecionado(menu){
        if(props.menuSelecionado == menu)
            return "selecionado";
    }


    return(
        <div id="comp-menu">
            <section id="info-empresa">
                <img src="/assets/images/logo.png" alt="logo"/>
                <h3>Books & Co.</h3>
            </section>

            <nav>
                <Link to="/" id={verificarMenuSelecionado("home")}>
                    <img src="/assets/images/icon-home.svg" alt="icon-home" />
                    <p>Home</p>
                </Link>

                <Link to="/cadastrar" id={verificarMenuSelecionado("cadastrar")}>
                    <img src="/assets/images/icon-add.svg" alt="icon-add" />
                    <p>Cadastrar</p>
                </Link>

                <Link to="/consultar" id={verificarMenuSelecionado("consultar")}>
                    <img src="/assets/images/icon-list.svg" alt="icon-list" />
                    <p>Consultar</p>
                </Link>
            </nav>

            <footer>
                <img src="/assets/images/icon-logout.svg" alt="icon-logout" />
                <p>Sair</p>
            </footer>
        </div>
    )
}

export default Menu;