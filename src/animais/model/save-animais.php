<?php

    // Obter nossa conexão com banco de dados
    include('../../conexao/conn.php');

    // Obter os dados enviados do formulário via REQUEST
    $requestData = $_REQUEST;

    // Verificação dos campos obrigatórios do formulário
    if(empty($requestData['PORTE'])){
        // Caso a variável venha gerar um retorno com erro
        $dados = array(
            "tipo" => "error",
            "mensagem" => "Existe(m) campo(s) obrigatório(s) não preenchido(s)"
        );
    } else{
        // Caso a variável exista e tenha conteúdo, vamos gerar uma requisição
        $IDANIMAIS = isset($requestData['IDANIMAIS']) ? $requestData['IDANIMAIS'] : '';
        $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : '';

        // verificação se é para cadastrar um novo registro
        if($operacao == 'insert'){
            try{
                $stmt = $pdo->prepare('INSERT INTO ANIMAIS (PORTE) VALUES (:porte)');
                $stmt->execute(array(
                    ':porte' => utf8_decode($requestData['PORTE'])
                ));
                $dados = array(
                    "tipo" => "success",
                    "mensagem" => "Espécie cadastrada com sucesso."
                );
            } catch (PDOException $e) {
                $dados = array(
                "tipo" => "error",
                "mensagem" => "Não foi possível efetuar o cadastro de espécie."
                );
            }
        } else{
            try{
                $stmt = $pdo->prepare('UPDATE ANIMAIS SET PORTE = :a WHERE IDANIMAIS = :id');
                $stmt->execute(array(
                    ':id' => $IDANIMAIS,
                    ':porte' => utf8_decode($requestData['PORTE'])
                ));
                $dados = array(
                    "tipo" => "success",
                    "mensagem" => "Espécie alterada com sucesso."
                );
            } catch(PDOException $e){
                $dados = array(
                    "tipo" => "error",
                    "mensagem" => "Não foi possível efetuar a alteração de espécie."
                );
            }
        }
    }

    echo json_encode($dados);