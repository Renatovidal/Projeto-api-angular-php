<?php

//variaveis de acesso
$url ="localhost";
$usuario ="root";
$senha = "";
$base = "api";

//conexao

$conexao = mysqli_connect($url, $usuario, $senha, $base);

//arrumar caracteres especias

mysqli_set_charset($conexao, "utf8");

?>  