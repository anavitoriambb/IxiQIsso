<?php

    // Declarar as variáveis necessárias para gerar a minha conexão com o banco de dados...
    //$hostname = "fdb29.awardspace.net";
    //$dbname = "3804792_refugiopet";
    //$username = "3804792_refugiopet";
    //$password = "Refugiopet_123";


    $hostname = "sql107.epizy.com";
    $dbname = "epiz_28941053_refugiopet";
    $username = "epiz_28941053";
    $password = "j8TNmmUdpBgG";

    try {
        $pdo = new PDO('mysql:host='.$hostname.';dbname='.$dbname, $username, $password);
        $pdo ->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        //echo 'Conexão realizada com sucesso!';
    } catch (PDOException $e) {
        echo 'Error: '.$e->getMessage();
    }
