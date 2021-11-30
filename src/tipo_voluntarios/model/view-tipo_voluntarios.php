<?php

    include('../../conexao/conn.php');

    $ID = $_REQUEST['IDTIPO_VOLUNTARIOS'];

    $sql = "SELECT * FROM TIPO_VOLUNTARIOS WHERE IDTIPO_VOLUNTARIOS = $IDTIPO_VOLUNTARIOS";

    $resultado = $pdo->query($sql);

    if($resultado){
        $reusltQuery = array();
        while($row = $resultado->fetch(PDO::FETCH_ASSOC)){
            $reusltQuery = array_map('utf8_encode', $row);
        }
        $dados = array(
            'tipo' => 'success',
            'mensagem' => '',
            'dados' => $reusltQuery
        );
    } else {
        $dados = array(
            'tipo' => 'error',
            'mensagem' => 'Não foi possível obter o registro solicitado',
            'dados' => array()
        );
    }

    echo json_encode($dados);