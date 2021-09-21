<?php
if(!empty($_POST["name"])) {
	$name = $_POST["visitor_name"];
	$email = $_POST["visitor_email"];
    $phone = $_POST["visitor_phone"];
	// $subject = $_POST["start-date"];
	// $content = $_POST["end-date"];

	$to = "tomdawson91@gmail.com";
	$mailHeaders = "From: " . $name . "<". $email .">\r\n";
	mail($to, $subject, $content, $mailHeaders);
}
// require_once "reservation.php";
?>