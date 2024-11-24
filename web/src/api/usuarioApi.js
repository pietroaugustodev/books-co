import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:5000" 
})


export async function Logar(email, senha){

    const resp = await api.post("/usuario", {
        "email": email,
        "senha": senha
    })

    return resp.data;
}