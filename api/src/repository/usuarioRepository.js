import conexao from "./connection.js"



export async function login(email, senha){
    const comandoSql = `SELECT  id_usuario AS id,
                                nm_usuario AS nome,
                                ds_email   AS email
                        FROM    tb_usuario
                        WHERE   ds_email = ?
                        AND     ds_senha = md5(?);`
    
    const [resp] = await conexao.query(comandoSql, [email, senha])
    
    return resp[0]
}





































export async function cadastrarLivro(infoLivro) {
    const comandoSql = `INSERT INTO tb_livro (id_usuario, nm_livro, nm_autor, ds_isbn, ds_editora, ds_edicao, ds_sinopse, dt_publicacao, ds_idioma, bt_disponivel, qtd_paginas, vl_preco)
                               VALUES        (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;

    const [resp] = await conexao.query(comandoSql, [infoLivro.idUsuario, infoLivro.nome, infoLivro.autor, infoLivro.isbn, infoLivro.editora, infoLivro.edicao, infoLivro.sinopse, infoLivro.publicacao, infoLivro.idioma, infoLivro.disponivel, infoLivro.qtdPaginas, infoLivro.preco])
    console.log(resp);


    return resp.insertId;
}