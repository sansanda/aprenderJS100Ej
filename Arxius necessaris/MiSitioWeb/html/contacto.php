<?php
if($_POST["nombre"] && $_POST["email"] != ""){
    $de = $_POST["nombre"];
    $destino = "tuemail"; //Escribe aquí la dirección a la cual quieres que llegue el formulario
    $asunto = "COMPARTIR EXPERIENCIAS";
    $mensaje .= "FORMULARIO."."\n";
    $mensaje .= "\n";
    $mensaje .= "NOMBRE: " . utf8_decode($_POST["nombre"]) ."\n";
    $mensaje .= "\n";
    $mensaje .= "EMAIL: " . utf8_decode($_POST["email"]) ."\n";
    $emailheader = "From: LO QUE TU QUIERAS <tuemail>\r\n";
mail($destino, $asunto, $mensaje, $emailheader) or die ("Cuidado, el formulario no se ha podido enviar.<br/>Vuelve a intentarlo.");
echo utf8_decode(utf8_encode('¡Hecho!'));
    } else {
    if($_POST["nombre"] == ""){
    echo utf8_encode ('Por favor, escribe tu nombre.');
    exit; }
    if($_POST["email"] == ""){
    echo utf8_encode ('Por favor, escribe un email de contacto.');
    exit; }
}
?>
