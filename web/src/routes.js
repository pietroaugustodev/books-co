import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact={true} path="/" element={<Login />}/>
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas