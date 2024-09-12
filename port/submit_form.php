<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    $to = 'willianvm14@gmail.com'; 
    $subject = 'Nova mensagem do portfólio de William Carvalho';
    $body = "Nome: $name\nE-mail: $email\n\nMensagem:\n$message";
    $headers = "From: $email";
    
    if (mail($to, $subject, $body, $headers)) {
        echo 'Mensagem enviada com sucesso!';
    } else {
        echo 'Falha no envio da mensagem.';
    }
} else {
    echo 'Método inválido.';
}
?>
