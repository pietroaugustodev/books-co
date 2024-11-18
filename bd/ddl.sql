create table tb_usuario(
	id_usuario		int primary key auto_increment,
    nm_usuario		varchar(200),
    ds_email		varchar(200),
    ds_senha		varchar(20)
);

create table tb_livro(
	id_livro		int primary key auto_increment,
    id_usuario		int,
    nm_livro		varchar(200),
    nm_autor		varchar(200),
    ds_isbn			varchar(200),
    ds_editora		varchar(100),
    ds_edicao		varchar(100),
    ds_sinopse		varchar(100),
    dt_publicacao	date,
    ds_idioma		varchar(100),
    bt_disponivel	boolean,
    qtd_paginas		int,
    vl_preco		decimal(15,2),
    img_capa		varchar(400),

	foreign key (id_usuario) references tb_usuario(id_usuario)
);