<?php
    // Obter nossa conexão com banco de dados
    include('../../conexao/conn.php');
    // Obter os dados enviados do formulário via REQUEST
    $requestData = $_REQUEST;
    // Verificação dos campos obrigatórios do formulário
    if(empty($requestData['VOLUNTARIOS_IDVOLUNTARIOS'])){
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
                $stmt = $pdo->prepare('INSERT INTO TIPO_VOLUNTARIOS ( VOLUNTARIOS_IDVOLUNTARIOS) VALUES (:a)');
                $stmt->execute(array(
                    ':a' => $requestData['VOLUNTARIOS_IDVOLUNTARIOS']
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
                $stmt = $pdo->prepare('UPDATE TIPO_VOLUNTARIOS SET VOLUNTARIOS_IDVOLUNTARIOS = :a WHERE IDTIPO_VOLUNTARIOS = :id');
                $stmt->execute(array(
                    ':id' => $ID,
                    ':a' => $requestData['VOLUNTARIOS_IDVOLUNTARIOS']
                ));
                $dados = array(
                    "tipo" => "success",
                    "mensagem" => "Animal alterado com sucesso."
                );
            } catch(PDOException $e){
                $dados = array(
                    "tipo" => "error",
                    "mensagem" => "Não foi possível efetuar a alteração de animal."
                );
            }
        }
    }
    echo json_encode($dados);
    