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
        $ID = isset($requestData['IDVOLUNTARIOS']) ? $requestData['IDVOLUNTARIOS'] : '';
        $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : '';
        // verificação se é para cadastrar um novo registro
        if($operacao == 'insert'){       
            try{
                $stmt = $pdo->prepare('INSERT INTO VOLUNTARIOS (NOME, TELEFONE, ENDERECO, RG, EMAIL, TIPO_VOLUNTARIOS_IDTIPO_VOLUNTARIOS, USUARIO_IDUSUARIO) VALUES (:a, :b, :c, :d, :e, :f, :g)');
                $stmt->execute(array(
                    ':a' => utf8_decode($requestData['NOME']),
                    ':b' => $requestData['TELEFONE'],
                    ':c' => $requestData['ENDERECO'],
                    ':d' => $requestData['RG'],
                    ':e' => $requestData['EMAIL'],
                    ':f' => $requestData['TIPO_VOLUNTARIOS_IDTIPO_VOLUNTARIOS'],
                    ':g' => $requestData['USUARIO_IDUSUARIO']
                ));
                $dados = array(
                    "tipo" => "success",
                    "mensagem" => "Voluntário cadastrado com sucesso."
                );
            } catch (PDOException $e) {
                $dados = array(
                "tipo" => "error",
                "mensagem" => "Não foi possível efetuar o cadastro do voluntário."
                );
            }
        } else{
            try{
                $stmt = $pdo->prepare('UPDATE VOLUNTARIOS SET NOME = :a, TELEFONE = :b, ENDERECO = :c, RG = :d, EMAIL = :e, TIPO_VOLUNTARIOS_IDTIPO_VOLUNTARIOS = :f, USUARIO_IDUSUARIO = :g WHERE IDVOLUNTARIOS = :id');
                $stmt->execute(array(
                    ':id' => $ID,
                    ':a' => utf8_decode($requestData['NOME']),
                    ':b' => $requestData['TELEFONE'],
                    ':c' => $requestData['ENDERECO'],
                    ':d' => $requestData['RG'],
                    ':e' => $requestData['EMAIL'],
                    ':f' => $requestData['TIPO_VOLUNTARIOS_IDTIPO_VOLUNTARIOS'],
                    ':g' => $requestData['USUARIO_IDUSUARIO']
                ));
                $dados = array(
                    "tipo" => "success",
                    "mensagem" => "Voluntário alterado com sucesso."
                );
            } catch(PDOException $e){
                $dados = array(
                    "tipo" => "error",
                    "mensagem" => "Não foi possível efetuar a alteração de voluntário."
                );
            }
        }
    }
    echo json_encode($dados);
    