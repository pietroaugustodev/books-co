
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./pages/adm/login"


export default function Rotas(){
    return (
        <BrowserRouter>
            <Routes>
                <Route exact={true} path="/adm/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}