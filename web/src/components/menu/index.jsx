import "./index.scss";

function Menu() {

    return(
        <div id="comp-menu">
            <section id="info-empresa">
                <img src="/assets/images/logo.png" alt="logo"/>
                <h3>Books & Co.</h3>
            </section>

            <nav>
                <article>
                    <img src="/assets/images/icon-home.svg" alt="icon-home" />
                    <p>Home</p>
                </article>

                <article>
                    <img src="/assets/images/icon-add.svg" alt="icon-add" />
                    <p>Cadastrar</p>
                </article>

                <article>
                    <img src="/assets/images/icon-list.svg" alt="icon-list" />
                    <p>Consultar</p>
                </article>
            </nav>

            <footer>
                <img src="/assets/images/icon-logout.svg" alt="icon-logout" />
                <p>Sair</p>
            </footer>
        </div>
    )
}

export default Menu;