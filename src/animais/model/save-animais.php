<?php
    // Obter nossa conexão com banco de dados
    include('../../conexao/conn.php');
    // Obter os dados enviados do formulário via REQUEST
    $requestData = $_REQUEST;
    // Verificação dos campos obrigatórios do formulário
    if(empty($requestData['PORTE']) || empty($requestData['DATARESGATE'])){
        // Caso a variável venha gerar um retorno com erro
        $dados = array(
            "tipo" => "error",
            "mensagem" => "Existe(m) campo(s) obrigatório(s) não preenchido(s)"
        );
    } else{
        // Caso a variável exista e tenha conteúdo, vamos gerar uma requisição
        $ID = isset($requestData['IDANIMAIS']) ? $requestData['IDANIMAIS'] : '';
        $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : '';
        // verificação se é para cadastrar um novo registro
        if($operacao == 'insert'){
           
            try{
                $stmt = $pdo->prepare('INSERT INTO ANIMAIS (DATARESGATE, SEXO, PORTE, USUARIO_IDUSUARIO, ESPECIE_IDESPECIE) VALUES (:a, :b, :c, :d, :e)');
                $stmt->execute(array(
                    ':a' => $requestData['DATARESGATE'],
                    ':b' => utf8_decode($requestData['SEXO']),
                    ':c' => utf8_decode($requestData['PORTE']),
                    ':d' => $requestData['USUARIO_IDUSUARIO'],
                    ':e' => $requestData['ESPECIE_IDESPECIE']
                ));
                $dados = array(
                    "tipo" => "success",
                    "mensagem" => "Animal cadastrado com sucesso."
                );
            } catch (PDOException $e) {
                $dados = array(
                "tipo" => "error",
                "mensagem" => "Não foi possível efetuar o cadastro do animal."
                );
            }
        } else{
            try{
                $stmt = $pdo->prepare('UPDATE ANIMAIS SET DATARESGATE = :a, SEXO = :b, PORTE = :c, USUARIO_IDUSUARIO = :d, ESPECIE_IDESPECIE = :e WHERE IDANIMAIS = :id');
                $stmt->execute(array(
                    ':id' => $ID,
                    ':a' => utf8_decode($requestData['DATARESGATE']),
                    ':b' => utf8_decode($requestData['SEXO']),
                    ':c' => utf8_decode($requestData['PORTE']),
                    ':d' => $requestData['USUARIO_IDUSUARIO'],
                    ':e' => $requestData['ESPECIE_IDESPECIE']
                ));
                $dados = array(
                    "tipo" => "success",
                    "mensagem" => "Animal alterado com sucesso."
                );
            } catch(PDOException $e){
                $dados = array(
                    "tipo" => "error",
                    "mensagem" => "Não foi possível efetuar a alteração de animaaaaaal."
                );
            }
        }
    }
    echo json_encode($dados);
    