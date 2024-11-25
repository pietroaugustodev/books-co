import "./index.scss";
import storage from "local-storage";


function Cabecalho() {

    const nomeUsuario = storage("usuario-logado").nome


    return(
        <div id="comp-cabecalho">
            <p>Seja bem-vindo, {nomeUsuario.substring(0, nomeUsuario.indexOf(" "))}!</p>
            <div>
                <p>{nomeUsuario[0].toUpperCase()}</p>
            </div>
        </div>
    )
}

export default Cabecalho;