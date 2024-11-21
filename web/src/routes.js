import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact={true} path="/login" element={<Login />}/>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas