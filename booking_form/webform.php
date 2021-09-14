<?php
echo "<pre>";

  print_r($_POST);

// if(!empty($_POST["name"])) {
	$name = $_POST["visitor_name"];
	$email = $_POST["visitor_email"];
  $phone = $_POST["visitor_phone"];
	$start_date = $_POST["start"];
	$end_date = $_POST["end"];

	$to = "tomdawson91@gmail.com";
  $body = "";

  $body .= "From:".$name."\r\n";
  $body .= "From:".$name."\r\n";
  $body .= "From:".$name."\r\n";

	// $mailHeaders = "From: " . $name . "<". $email .">\r\n";
	mail($to, $email, $body);
// }
// require_once "reservation.php";

echo "</pre>";
?>

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Document</title>
  </head>
  <body>
    <form action="webform.php" method="POST">
      <div class="elem-group">
        <label for="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="visitor_name"
          placeholder="John Doe"
          pattern="[A-Z\sa-z]{3,20}"
          required
        />
      </div>
      <div class="elem-group">
        <label for="email">Your E-mail</label>
        <input
          type="email"
          id="email"
          name="visitor_email"
          placeholder="john.doe@email.com"
          required
        />
      </div>
      <div class="elem-group">
        <label for="phone">Your Phone</label>
        <input
          type="tel"
          id="phone"
          name="visitor_phone"
          placeholder="0498-348-387"
          required
        />
      </div>
      <div class="elem-group inlined">
        <label for="start-date">start date</label>
        <input type="date" id="start-date" name="start" required />
      </div>
      <div class="elem-group inlined">
        <label for="end-date">end date</label>
        <input type="date" id="end-date" name="end" required />
      </div>
      <div class="elem-group">
        <label for="message">Anything Else?</label>
        <textarea
          id="message"
          name="visitor_message"
          placeholder="Tell us anything else that might be important."
          required
        ></textarea>
      </div>
      <button type="submit">Book The Rooms</button>
    </form>
    <script src="script.js"></script>
  </body>
</html>
