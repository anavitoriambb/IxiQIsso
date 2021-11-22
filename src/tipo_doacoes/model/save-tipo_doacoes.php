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
        $ID = isset($requestData['IDTIPO_DOACOES']) ? $requestData['IDTIPO_DOACOES'] : '';
        $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : '';
        // verificação se é para cadastrar um novo registro
        if($operacao == 'insert'){
            try{
                $stmt = $pdo->prepare('INSERT INTO TIPO_DOACOES (QUANTIDADE, VALOR, DESCRICAO) VALUES (:a, :b, :c)');
                $stmt->execute(array(
                    ':a' => $requestData['QUANTIDADE'],
                    ':b' => $requestData['VALOR'],
                    ':c' => $requestData['DESCRICAO']
                ));
                $dados = array(
                    "tipo" => "success",
                    "mensagem" => "Tipo de doção cadastrado com sucesso."
                );
            } catch (PDOException $e) {
                $dados = array(
                "tipo" => "error",
                "mensagem" => "Não foi possível efetuar o cadastro do tipo de doação."
                );
            }
        } else{
            try{
                $stmt = $pdo->prepare('UPDATE TIPO_DOACOES SET QUANTIDADE = :a, VALOR = :b, DESCRICAO = :c WHERE IDTIPO_DOACOES = :id');
                $stmt->execute(array(
                    ':id' => $ID,
                    ':a' => $requestData['QUANTIDADE'],
                    ':b' => $requestData['VALOR'],
                    ':c' => $requestData['DESCRICAO']
                ));
                $dados = array(
                    "tipo" => "success",
                    "mensagem" => "Tipo de doação alterado com sucesso."
                );
            } catch(PDOException $e){
                $dados = array(
                    "tipo" => "error",
                    "mensagem" => "Não foi possível efetuar a alteração do tipo de doação."
                );
            }
        }
    }
    echo json_encode($dados);