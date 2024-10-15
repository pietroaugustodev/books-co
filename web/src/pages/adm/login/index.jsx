import "./index.scss"


function Login(){
    return(
        <div id="pag-adm-login">
            <main>
                <article id="apresentacao">
                    <h2>Seja bem-vindo!</h2>
                </article>
                <article id="campos">
                    <div>
                        <span>E-mail: </span>
                        <input type="email" placeholder=""/>
                    </div>
                    <div>
                        <span>Senha: </span>
                        <input type="password"/>
                    </div>
                    <button>ENTRAR</button>
                </article>
            </main>
        </div>
    )
}


export default Login;