import conexao from "./connection.js"



export async function login(email, senha){
    const comandoSql = `SELECT  id_usuario AS id,
                                nm_usuario AS nome,
                                ds_email   AS email
                        FROM    tb_usuario
                        WHERE   ds_email = ?
                        AND     ds_senha = md5(?);`
    
    const [resp] = await conexao.query(comandoSql, [email, senha])
    
    return resp[0];
}
