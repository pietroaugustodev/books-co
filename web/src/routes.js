import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/login";

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact={true} path="/" element={<Login />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas