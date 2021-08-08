<?php

    include('../../conexao/conn.php');

    $IDANIMAIS = $_REQUEST['IDANIMAIS'];

    $sql = "SELECT * FROM ANIMAIS WHERE IDANIMAIS = $IDANIMAIS";

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
            'mensagem' => 'Não foi possível obter o registro solicitado.',
            'dados' => array()
        );
    }

    echo json_encode($dados);