<?php
    // Obter nossa conexão com banco de dados
    include('../../conexao/conn.php');
    // Obter os dados enviados do formulário via REQUEST
    $requestData = $_REQUEST;
    // Verificação dos campos obrigatórios do formulário
    if(empty($requestData['NOME'])){
        // Caso a variável venha gerar um retorno com erro
        $dados = array(
            "tipo" => "error",
            "mensagem" => "Existe(m) campo(s) obrigatório(s) não preenchido(s)"
        );
    } else{
        // Caso a variável exista e tenha conteúdo, vamos gerar uma requisição
        $ID = isset($requestData['IDDOADORES']) ? $requestData['IDDOADORES'] : '';
        $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : '';
        // verificação se é para cadastrar um novo registro
        if($operacao == 'insert'){
           
            try{
                $stmt = $pdo->prepare('INSERT INTO DOADORES (NOME, TELEFONE, EMAIL, USUARIO_IDUSUARIO) VALUES (:a, :b, :c, :d)');
                $stmt->execute(array(
                    ':a' => $requestData['NOME'],
                    ':b' => $requestData['TELEFONE'],
                    ':c' => $requestData['EMAIL'],
                    ':d' => $requestData['USUARIO_IDUSUARIO']
                ));
                $dados = array(
                    "tipo" => "success",
                    "mensagem" => "Doador cadastrado com sucesso."
                );
            } catch (PDOException $e) {
                $dados = array(
                "tipo" => "error",
                "mensagem" => "Não foi possível efetuar o cadastro do doador."
                );
            }
        } else{
            try{
                $stmt = $pdo->prepare('UPDATE DOADORES SET NOME = :a, TELEFONE = :b, EMAIL = :c, USUARIO_IDUSUARIO = :d WHERE IDDOADORES = :id');
                $stmt->execute(array(
                    ':id' => $ID,
                    ':a' => $requestData['NOME'],
                    ':b' => $requestData['TELEFONE'],
                    ':c' => $requestData['EMAIL'],
                    ':d' => $requestData['USUARIO_IDUSUARIO']
                ));
                $dados = array(
                    "tipo" => "success",
                    "mensagem" => "Doador alterado com sucesso."
                );
            } catch(PDOException $e){
                $dados = array(
                    "tipo" => "error",
                    "mensagem" => "Não foi possível efetuar a alteração de doador."
                );
            }
        }
    }
    echo json_encode($dados);
    