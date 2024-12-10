import { Link, useNavigate } from "react-router-dom";
import "./index.scss";
import storage from "local-storage"
import { useEffect } from "react";

function Menu(props) {

    const navigate = useNavigate()

    function verificarMenuSelecionado(menu){
        if(props.menuSelecionado == menu)
            return "selecionado";
    }

    function deslogar(){
        storage.remove("usuario-logado");
        navigate("/login");
    }

    useEffect(( ) => {
        if(!storage("usuario-logado"))
            navigate("/login");
    }, [])

    return(
        <div id="comp-menu">
            <main>
                <section id="info-empresa">
                    <img src="/assets/images/logo.png" alt="logo"/>
                    <h3>Books & Co.</h3>
                </section>

                <nav>
                    <Link className="funcoesMenu" to="/" id={verificarMenuSelecionado("home")}>
                        <img src="/assets/images/icon-home.svg" alt="icon-home" />
                        <p>Home</p>
                    </Link>

                    <Link className="funcoesMenu" to="/cadastrar" id={verificarMenuSelecionado("cadastrar")}>
                        <img src="/assets/images/icon-add.svg" alt="icon-add" />
                        <p>Cadastrar</p>
                    </Link>

                    <Link to="/consultar" className="funcao-consultar">
                        <div className="funcoesMenu" id={verificarMenuSelecionado("consultar")}>
                            <img 
                                src="/assets/images/icon-list.svg" 
                                alt="icon-list" 
                            />
                            <p>Consultar</p>
                        </div>
                        <div className={props.menuSelecionado != "consultar" ? "consulta-selecionada" : ""}>
                            <p onClick={() => props.formaConsultar("tabela")}> {`->`} Tabela</p>
                        </div>
                        <div className={props.menuSelecionado != "consultar" ? "consulta-selecionada" : ""}>
                            <p onClick={() => props.formaConsultar("card")}> {`->`} Card</p>
                        </div>
                    </Link>
                </nav>

                <footer onClick={deslogar}>
                    <img src="/assets/images/icon-logout.svg" alt="icon-logout" />
                    <p>Sair</p>
                </footer>
            </main>
            <div></div>
        </div>
    )
}

export default Menu;