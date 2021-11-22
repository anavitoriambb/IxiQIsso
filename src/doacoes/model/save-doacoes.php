<?php

    // Obter nossa conexão com banco de dados
    include('../../conexao/conn.php');

    // Obter os dados enviados do formulário via REQUEST
    $requestData = $_REQUEST;

    // Verificação dos campos obrigatórios do formulário
    if(empty($requestData['DATAENTRADA'])){
        // Caso a variável venha gerar um retorno com erro
        $dados = array(
            "tipo" => "error",
            "mensagem" => "Existe(m) campo(s) obrigatório(s) não preenchido(s)"
        );
    } else{
        // Caso a variável exista e tenha conteúdo, vamos gerar uma requisição
        $ID = isset($requestData['IDDOACOES']) ? $requestData['IDDOACOES'] : '';
        $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : '';

        // verificação se é para cadastrar um novo registro
        if($operacao == 'insert'){
            try{
                $stmt = $pdo->prepare('INSERT INTO DOACOES (DATAENTRADA) VALUES (:a)');
                $stmt->execute(array(
                    ':a' => utf8_decode($requestData['DATAENTRADA'])
                ));
                $dados = array(
                    "tipo" => "success",
                    "mensagem" => "Doações cadastrada com sucesso."
                );
            } catch (PDOException $e) {
                $dados = array(
                "tipo" => "error",
                "mensagem" => "Não foi possível efetuar o cadastro das doações."
                );
            }
        } else{
            try{
                $stmt = $pdo->prepare('UPDATE DOACOES SET DATAENTRADA = :a WHERE IDDOACOES = :id');
                $stmt->execute(array(
                    ':id' => $ID,
                    ':a' => utf8_decode($requestData['DATAENTRADA'])
                ));
                $dados = array(
                    "tipo" => "success",
                    "mensagem" => "Doações alterada com sucesso."
                );
            } catch(PDOException $e){
                $dados = array(
                    "tipo" => "error",
                    "mensagem" => "Não foi possível efetuar a alteração das doações."
                );
            }
        }
    }

    echo json_encode($dados);