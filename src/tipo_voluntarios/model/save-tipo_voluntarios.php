<?php
    // Obter nossa conexão com banco de dados
    include('../../conexao/conn.php');
    // Obter os dados enviados do formulário via REQUEST
    $requestData = $_REQUEST;
    // Verificação dos campos obrigatórios do formulário
    if(empty($requestData['DESCRICAO'])){
        // Caso a variável venha gerar um retorno com erro
        $dados = array(
            "tipo" => "error",
            "mensagem" => "Existe(m) campo(s) obrigatório(s) não preenchido(s)"
        );
    } else{
        // Caso a variável exista e tenha conteúdo, vamos gerar uma requisição
        $ID = isset($requestData['IDTIPO_VOLUNTARIOS']) ? $requestData['IDTIPO_VOLUNTARIOS'] : '';
        $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : '';
        // verificação se é para cadastrar um novo registro
        if($operacao == 'insert'){
            try{
                $stmt = $pdo->prepare('INSERT INTO TIPO_VOLUNTARIOS (DESCRICAO) VALUES (:a)');
                $stmt->execute(array(
                    ':a' => utf8_decode($requestData['DESCRICAO'])
                ));
                $dados = array(
                    "tipo" => "success",
                    "mensagem" => "Tipo de voluntário cadastrado com sucesso."
                );
            } catch (PDOException $e) {
                $dados = array(
                "tipo" => "error",
                "mensagem" => "Não foi possível efetuar o cadastro do tipo de voluntário."
                );
            }
        } else{
            try{
                $stmt = $pdo->prepare('UPDATE TIPO_VOLUNTARIOS SET DESCRICAO = :a WHERE IDTIPO_VOLUNTARIOS = :id');
                $stmt->execute(array(
                    ':id' => $ID,
                    ':a' => utf8_decode($requestData['DESCRICAO'])
                ));
                $dados = array(
                    "tipo" => "success",
                    "mensagem" => "Tipo de voluntário alterado com sucesso."
                );
            } catch(PDOException $e){
                $dados = array(
                    "tipo" => "error",
                    "mensagem" => "Não foi possível efetuar a alteração do tipo de voluntário."
                );
            }
        }
    }
    echo json_encode($dados);