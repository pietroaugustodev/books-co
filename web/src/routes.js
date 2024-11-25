import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Cadastrar from "./pages/cadastrar";
import Consultar from "./pages/consultar";

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact={true} path="/login" element={<Login />}/>
                <Route path="/" element={<Home />} />
                <Route path="/cadastrar" element={<Cadastrar />} />
                <Route path="/consultar" element={<Consultar />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas