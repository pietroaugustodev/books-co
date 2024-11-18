import { useState } from "react";
import "./index.scss"
import { Logar } from "../../api/usuarioApi";


function Login(){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    
    async function login(){
        try{
            const resp = await Logar(email, senha)
            console.log("logou");
            
        } catch(err){
            console.log(err)
        }
    }
    
    return(
        <div id="pag-adm-login">
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
                        />
                    </div>
                    <div>
                        <span>Senha: </span>
                        <input 
                            type="password"
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>
                    <button onClick={login}>ENTRAR</button>
                </article>
            </main>
        </div>
    )
}

export default Login;