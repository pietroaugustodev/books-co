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
                        <div>
                            <input type="text" placeholder="Buscar livro pelo nome"/>
                            <img src="/assets/images/icon-search.svg" alt="icon-search" />
                        </div>
                    </section>
                    <table>
                        <div>
                            <thead>
                                <th class="tamanhoPequeno id"> IDENTIFICAÇÃO </th>
                                <th class="tamanhoGrande"> LIVRO </th>
                                <th class="tamanhoMedio"> AUTOR </th>
                                <th class="tamanhoPequeno"> LANÇAMENTO </th>
                                <th class="campo-disponivel"> DISPONÍVEL </th>
                            </thead>
                        </div>
                        <tbody>
                            <tr>
                                <td class="tamanhoPequeno id">#01</td>
                                <td class="tamanhoGrande" >Harry Potter e a P...</td>
                                <td class="tamanhoMedio">Erick Simons</td>
                                <td class="tamanhoPequeno">04/01/2005</td>
                                <td class="campo-disponivel">Sim</td>
                                <div>
                                    <img src="/assets/images/icon-alter.svg" alt="icon-alter" />
                                    <img src="/assets/images/icon-delete.svg" alt="icon-delete" />
                                </div>
                            </tr>
                            <tr>
                                <td class="tamanhoPequeno id">#01</td>
                                <td class="tamanhoGrande" >Harry Potter e a P...</td>
                                <td class="tamanhoMedio">Erick Simons</td>
                                <td class="tamanhoPequeno">04/01/2005</td>
                                <td class="campo-disponivel">Sim</td>
                                <div>
                                    <img src="/assets/images/icon-alter.svg" alt="icon-alter" />
                                    <img src="/assets/images/icon-delete.svg" alt="icon-delete" />
                                </div>
                            </tr>
                            <tr>
                                <td class="tamanhoPequeno id">#01</td>
                                <td class="tamanhoGrande" >Harry Potter e a P...</td>
                                <td class="tamanhoMedio">Erick Simons</td>
                                <td class="tamanhoPequeno">04/01/2005</td>
                                <td class="campo-disponivel">Sim</td>
                                <div>
                                    <img src="/assets/images/icon-alter.svg" alt="icon-alter" />
                                    <img src="/assets/images/icon-delete.svg" alt="icon-delete" />
                                </div>
                            </tr>
                            <tr>
                                <td class="tamanhoPequeno id">#01</td>
                                <td class="tamanhoGrande" >Harry Potter e a P...</td>
                                <td class="tamanhoMedio">Erick Simons</td>
                                <td class="tamanhoPequeno">04/01/2005</td>
                                <td class="campo-disponivel">Sim</td>
                                <div>
                                    <img src="/assets/images/icon-alter.svg" alt="icon-alter" />
                                    <img src="/assets/images/icon-delete.svg" alt="icon-delete" />
                                </div>
                            </tr>
                            <tr>
                                <td class="tamanhoPequeno id">#01</td>
                                <td class="tamanhoGrande" >Harry Potter e a P...</td>
                                <td class="tamanhoMedio">Erick Simons</td>
                                <td class="tamanhoPequeno">04/01/2005</td>
                                <td class="campo-disponivel">Sim</td>
                                <div>
                                    <img src="/assets/images/icon-alter.svg" alt="icon-alter" />
                                    <img src="/assets/images/icon-delete.svg" alt="icon-delete" />
                                </div>
                            </tr>
                            <tr>
                               <td class="tamanhoPequeno id">#01</td>
                                <td class="tamanhoGrande" >Harry Potter e a P...</td>
                                <td class="tamanhoMedio">Erick Simons</td>
                                <td class="tamanhoPequeno">04/01/2005</td>
                                <td class="campo-disponivel">Sim</td>
                                <div>
                                    <img src="/assets/images/icon-alter.svg" alt="icon-alter" />
                                    <img src="/assets/images/icon-delete.svg" alt="icon-delete" />
                                </div>
                            </tr>
                            <tr>
                               <td class="tamanhoPequeno id">#01</td>
                                <td class="tamanhoGrande" >Harry Potter e a P...</td>
                                <td class="tamanhoMedio">Erick Simons</td>
                                <td class="tamanhoPequeno">04/01/2005</td>
                                <td class="campo-disponivel">Sim</td>
                                <div>
                                    <img src="/assets/images/icon-alter.svg" alt="icon-alter" />
                                    <img src="/assets/images/icon-delete.svg" alt="icon-delete" />
                                </div>
                            </tr>
                        </tbody>
                    </table>
                </main>
            </div>
        </div>
    )
}

export default Consultar;