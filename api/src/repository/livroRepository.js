import conexao from "./connection.js";


// Cadastrando

export async function cadastrarLivro(infoLivro) {
    const comandoSql = `INSERT INTO tb_livro (id_usuario, nm_livro, nm_autor, ds_isbn, ds_editora, ds_edicao, ds_sinopse, dt_publicacao, ds_idioma, bt_disponivel, qtd_paginas, vl_preco)
                               VALUES        (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;

    const [resp] = await conexao.query(comandoSql, [infoLivro.idUsuario, infoLivro.nome, infoLivro.autor, infoLivro.isbn, infoLivro.editora, infoLivro.edicao, infoLivro.sinopse, infoLivro.publicacao, infoLivro.idioma, infoLivro.disponivel, infoLivro.qtdPaginas, infoLivro.preco])

    return resp.insertId;
}

export async function cadastrarImagemLivro(imagem, idLivro) {
    const comandoSql = `UPDATE tb_livro
                           SET img_capa = ?
                         WHERE id_livro = ? ;`

    const [resp] = await conexao.query(comandoSql, [imagem, idLivro]);

    return resp.affectedRows;
}


// Buscando

export async function buscarLivros() {
    const comandoSql = `SELECT  id_livro        AS id,
                                id_usuario      AS idUsuario,
                                nm_livro        AS nome,
                                nm_autor        AS autor,
                                dt_publicacao   AS publicacao,
                                ds_sinopse      AS sinopse,
                                ds_idioma       AS idioma,
                                vl_preco        AS preco,
                                img_capa        AS capa,
                                qtd_paginas     AS qtdPaginas,
                                bt_disponivel   AS disponivel,
                                ds_isbn         AS isbn,
                                ds_editora      AS editora,
                                ds_edicao       AS edicao
                          FROM  tb_livro;`;

    const [resp] = await conexao.query(comandoSql);

    return resp;
}

export async function buscarLivroPorNome(nome) {
    const comandoSql = `SELECT  id_livro        AS id,
                                id_usuario      AS idUsuario,
                                nm_livro        AS nome,
                                nm_autor        AS autor,
                                dt_publicacao   AS publicacao,
                                ds_sinopse      AS sinopse,
                                ds_idioma       AS idioma,
                                vl_preco        AS preco,
                                img_capa        AS capa,
                                qtd_paginas     AS qtdPaginas,
                                bt_disponivel   AS disponivel,
                                ds_isbn         AS isbn,
                                ds_editora      AS editora,
                                ds_edicao       AS edicao
                          FROM  tb_livro
                         WHERE  nm_livro like ?;`;

    const [resp] = await conexao.query(comandoSql, [`%${nome}%`]);

    return resp;
}


// Deletando

export async function deletarLivro(idLivro) {
    const comandoSql = `DELETE 
                          FROM tb_livro
                         WHERE id_livro = ?;`;

    const [resp] = await conexao.query(comandoSql, [idLivro]);
    
    return resp.affectedRows;
}


// Alterando 

export async function alterarLivro(infoLivro) {
    const comandoSql = `UPDATE  tb_livro
                           SET  nm_livro = ?,
                                nm_autor = ?,
                                ds_isbn = ?,
                                ds_editora = ?,
                                ds_edicao = ?,
                                ds_sinopse = ?,
                                dt_publicacao = ?,
                                ds_idioma = ?,
                                bt_disponivel = ?,
                                qtd_paginas = ?,
                                vl_preco = ?
                         WHERE  id_livro = ?`;

    const [resp] = await conexao.query(comandoSql, [infoLivro.nome, infoLivro.autor, infoLivro.isbn, infoLivro.editora, infoLivro.edicao, infoLivro.sinopse, infoLivro.publicacao, infoLivro.idioma, infoLivro.disponivel, infoLivro.qtdPaginas, infoLivro.preco, infoLivro.id]);

    return resp.affectedRows;
}