<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require("/PHPMailer/src/PHPMailer.php");
require("/PHPMailer/src/SMTP.php");
require("/PHPMailer/src/Exception.php");

$mail = new PHPMailer\PHPMailer\PHPMailer();

$mail->IsSMTP();
$mail->CharSet="UTF-8";
$mail->Host = "websmtp.simply.com"; /* Zależne od hostingu poczty*/
$mail->SMTPDebug = 0;
$mail->Port = 587; /* Zależne od hostingu poczty, czasem 587 */
$mail->SMTPSecure = 'tls'; /* Jeżeli ma być aktywne szyfrowanie SSL */
$mail->SMTPAuth = true;
$mail->IsHTML(true);
$mail->Username = "mosweb@mosweb.pl"; /* login do skrzynki email często adres*/
$mail->Password = "Aleksander2022"; /* Hasło do poczty */
$mail->setFrom('mosweb@mosweb.pl', 'Mosweb'); /* adres e-mail i nazwa nadawcy */
$mail->AddAddress("pawel@pawel.pl"); /* adres lub adresy odbiorców */
$mail->Subject = "Testowa wiadomość SMTP"; /* Tytuł wiadomości */
$mail->Body = "Witaj, Jeżeli to czytasz, to znaczy, że udało się poprawnie wysłać e-maila za pomocą SMTP!";

if(!$mail->Send()) {
echo "Błąd wysyłania e-maila: " . $mail->ErrorInfo;
} else {
echo "Wiadomość została wysłana!";
}
