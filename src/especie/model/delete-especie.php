<?php

    // Instanciar o nosso banco de dados
    include('../../conexao/conn.php')

    // Coleta do ID que será excluído em nosso banco de dados
    $ID = $_REQUEST['IDESPECIE'];

    // Gerar uma querie de exclusão no banco de dados
    $sql = "DELETE FROM ESPECIE WHERE IDESPECIE = $ID";

    // Executar a querie 
    $resultado = $pdo->query($sql);

    // Testar o resultado da querie
    if($resultado){
        $dados = array(
            'tipo' => 'success',
            'mensagem' => 'Registro excluído com sucesso!'
        );
    } else{
        $dados = array(
            'tipo' => 'error',
            'mensagem' => 'Não foi possível excluir o registro'
        );
    }

    echo json_encode($dados);