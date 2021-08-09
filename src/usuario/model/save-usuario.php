<?php

    // Obter nossa conexão com banco de dados
    include('../../conexao/conn.php');

    // Obter os dados enviados do formulário via REQUEST
    $requestData = $_REQUEST;

    // Verificação dos campos obrigatórios do formulário
    if(empty($requestData['LOGINN'])){
        // Caso a variável venha gerar um retorno com erro
        $dados = array(
            "tipo" => "error",
            "mensagem" => "Existe(m) campo(s) obrigatório(s) não preenchido(s)"
        );
    } else{
        // Caso a variável exista e tenha conteúdo, vamos gerar uma requisição
        $ID = isset($requestData['IDUSUARIO']) ? $requestData['IDUSUARIO'] : '';
        $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : '';

        // verificação se é para cadastrar um novo registro
        if($operacao == 'insert'){
            try{
                $stmt = $pdo->prepare('INSERT INTO USUARIO (LOGINN, SENHA) VALUES (:a, :b)');
                $stmt->execute(array(
                    ':a' => utf8_decode($requestData['LOGINN']),
                    ':b' => utf8_decode($requestData['SENHA'])
                ));
                $dados = array(
                    "tipo" => "success",
                    "mensagem" => "Usuário cadastrado com sucesso."
                );
            } catch (PDOException $e) {
                $dados = array(
                "tipo" => "error",
                "mensagem" => "Não foi possível efetuar o cadastro do usuário."
                );
            }
        } else{
            try{
                $stmt = $pdo->prepare('UPDATE USUARIO SET LOGINN = :a, SENHA = :b  WHERE IDUSUARIO = :id');
                $stmt->execute(array(
                    ':id' => $IDUSUARIO,
                    ':a' => utf8_decode($requestData['LOGINN']),
                    ':b' => utf8_decode($requestData['SENHA'])
                ));
                $dados = array(
                    "tipo" => "success",
                    "mensagem" => "Usuário alterado com sucesso."
                );
            } catch(PDOException $e){
                $dados = array(
                    "tipo" => "error",
                    "mensagem" => "Não foi possível efetuar a alteração do usuário."
                );
            }
        }
    }

    echo json_encode($dados);