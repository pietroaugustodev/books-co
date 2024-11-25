import Cabecalho from "../../components/cabecalho";
import Menu from "../../components/menu";
import "./index.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import storage from "local-storage";

function Home(){
    
    const navigate = useNavigate()
    
    useEffect(() => {
        if(!storage("usuario-logado"))
            navigate("/login")
    }, [])

    
    return(
        <div id="pag-home">
            <Menu menuSelecionado="home"/>
            <div id="tela">
                <Cabecalho />
                <main>
                    <img src="/assets/images/logo.svg" alt="logo" />
                </main>
            </div>
        </div>
    )
}

export default Home;