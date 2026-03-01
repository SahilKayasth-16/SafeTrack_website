<?php

$f_name = $_POST['First_name'];
$l_name = $_POST['Last_name'];
$contact = $_POST['Contact'];
$email = $_POST['Email_ID'];
$feedback = $_POST['Feedback'];

//Database connection 

$conn = new mysqli("localhost", "root", "", "Feedback");
if ($conn -> connect_error) {
    die("Failed to connect: ". $conn -> connect_error);
} else {
    $stmt = $conn -> prepare("INSERT INTO feedbackform(Firstname, Lastname, Contact, Email, Feedback) VALUES (?, ?, ?, ?, ?)");

    $stmt -> bind_param("sssss", $f_name, $l_name, $contact, $email, $feedback);

    $stmt -> execute();

    echo "Thank you for your feedback!";

    $stmt -> close();

    $conn -> close();
}

?>