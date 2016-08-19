<?php
//Variables

$to = 'fitnessedgescv@gmail.com';

$name = $_POST['name'];

$email = $_POST['email'];

$comment = $_POST['view'];


$sub = 'Contact Form Informations';

$msg  = "Name : $name \r\n"; 
$msg .= "Email : $email \r\n";
$msg .= "Message : $comment \r\n";


mail($to, $sub, $msg, "From: $email");


?>