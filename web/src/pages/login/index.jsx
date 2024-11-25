import { useEffect, useRef, useState } from "react";
import "./index.scss"
import { Logar } from "../../api/usuarioApi";
import { toast } from "react-toastify"
import LoadingBar from "react-top-loading-bar"
import { useNavigate } from "react-router-dom";
import storage from "local-storage"

function Login(){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [carregando, setCarregando] = useState(false);
    const ref = useRef();
    const navigate = useNavigate();


    async function login(){
        ref.current.continuousStart()
        setCarregando(true)
        try{
            const resp = await Logar(email, senha)
            toast.success("Logado com sucesso", {
                autoClose: 1300
            }) 
            
            storage("usuario-logado", resp)

            setTimeout(() => {
                navigate("/")
            }, 2000)

        } catch(err){
            setCarregando(false)
            ref.current.complete()
            toast.error(err.response.data.erro)
        }
    }

    function verificarTecla(e){
        if(e.key == "Enter") 
            login()
    }

    useEffect(() => {
        if(storage("usuario-logado"))
            navigate("/")
    }, [])
    
    return(
        <div id="pag-adm-login">
            <LoadingBar color="#fff" ref={ref}/>
            <main>
                <img src="/assets/images/logo.png" alt="logo" />
                <article id="apresentacao">
                    <h2>Bem-vindo!</h2>
                </article>
                <article id="campos">
                    <div>
                        <span>E-mail: </span>
                        <input 
                            type="text" 
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyDown={verificarTecla}
                        />
                    </div>
                    <div>
                        <span>Senha: </span>
                        <input 
                            type="password"
                            onChange={(e) => setSenha(e.target.value)}
                            onKeyDown={verificarTecla}
                        />
                    </div>
                    <button 
                        onClick={login}
                        disabled={carregando}
                    > ENTRAR </button>
                </article>
            </main>
        </div>
    )
}

export default Login;