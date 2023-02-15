<?php

//incluir a conexão

include("conexao.php");

//obter dados com um input via php
$obterDados = file_get_contents("php://input");

//extrair os dados do json
$extrair = json_decode($obterDados);

//separando os dados do JSON, que para apagar precisa apenas do id do curso
$idCurso = $extrair -> $cursos -> idCurso;

//SQL para cadastrar no banco

$sql = "DELETE FROM cursos WHERE idCurso = $idCurso";
mysqli_query($conexao, $sql);


?>