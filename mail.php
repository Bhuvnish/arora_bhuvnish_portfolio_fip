<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['firstname'];
    $lastName = $_POST['lastname'];
    $company = $_POST['company'];
    $subject = $_POST['subject'];

    $connect = new mysqli('localhost', 'root', 'root', 'contact_db');

    if ($connect->connect_error) {
        die('Connection failed: ' . $connect->connect_error);
    }

    // Using prepared statement to prevent SQL injection
    $stmt = $connect->prepare("INSERT INTO EMAILdb (fname, lname, company, submit) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $firstName, $lastName, $company, $subject);

    if ($stmt->execute()) {
        echo "Record inserted successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $connect->close();
}

?>