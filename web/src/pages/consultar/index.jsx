import Cabecalho from "../../components/cabecalho";
import Menu from "../../components/menu";
import "./index.scss";


function Consultar() {
    return(
        <div id="pag-consultar">
            <Menu menuSelecionado="consultar"/>
            <div id="tela">
                <Cabecalho />
                <main>
                    <section>
                        <input type="text" placeholder="Buscar livro por nome"/>
                        <img src="" alt="icon-search" />
                    </section>
                    <table>
                        <thead>
                            <th> IDENTIFICAÇÃO </th>
                            <th> LIVRO </th>
                            <th> AUTOR </th>
                            <th> LANÇAMENTO </th>
                            <th> DISPONÍVEL </th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#01</td>
                                <td>Harry Potter e a P...</td>
                                <td>Erick Simons</td>
                                <td>04/01/2005</td>
                                <td>Sim</td>
                                <img src="" alt="icon-alter" />
                                <img src="" alt="icon-delete" />
                            </tr>
                            <tr>
                                <td>#02</td>
                                <td>Tartarugas Ninja</td>
                                <td>Erick Simons</td>
                                <td>16/09/2019</td>
                                <td>Sim</td>
                                <img src="" alt="icon-alter" />
                                <img src="" alt="icon-delete" />
                            </tr>
                            <tr>
                                <td>#03</td>
                                <td>Querido Jonh</td>
                                <td>Erick Simons</td>
                                <td>20/10/2015</td>
                                <td>Sim</td>
                                <img src="" alt="icon-alter" />
                                <img src="" alt="icon-delete" />
                            </tr>
                            <tr>
                                <td>#04</td>
                                <td>Barbie</td>
                                <td>Erick Simons</td>
                                <td>04/01/2005</td>
                                <td>Não</td>
                                <img src="" alt="icon-alter" />
                                <img src="" alt="icon-delete" />
                            </tr>
                            <tr>
                                <td>#05</td>
                                <td>Velozes e Furiosos</td>
                                <td>Erick Simons</td>
                                <td>20/06/2003</td>
                                <td>Sim</td>
                                <img src="" alt="icon-alter" />
                                <img src="" alt="icon-delete" />
                            </tr>
                            <tr>
                                <td>#06</td>
                                <td>Arma de Combate</td>
                                <td>Erick Simons</td>
                                <td>04/01/2005</td>
                                <td>Não</td>
                                <img src="" alt="icon-alter" />
                                <img src="" alt="icon-delete" />
                            </tr>
                            <tr>
                                <td>#01</td>
                                <td>Harry Potter e a P...</td>
                                <td>Erick Simons</td>
                                <td>04/01/2005</td>
                                <td>Sim</td>
                                <img src="" alt="icon-alter" />
                                <img src="" alt="icon-delete" />
                            </tr>
                        </tbody>
                    </table>
                </main>
            </div>
        </div>
    )
}

export default Consultar;