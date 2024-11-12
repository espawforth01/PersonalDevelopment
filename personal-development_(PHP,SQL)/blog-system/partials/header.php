<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Frontier</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php
        // Configuration
        $db_host = 'localhost';
        $db_username = 'personal_development';
        $db_password = 'personal_development';
        $db_name = 'p-d_digitalFrontier';

        // Create connection
        $conn = new mysqli($db_host, $db_username, $db_password, $db_name);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Start session
        session_start();
    ?>

    <header>
        <h1>Digital Frontier</h1>
        <nav>
            <!-- Login / Register / Logout -->
            <a href="digitalFrontier.php">Home</a>
            <!-- Create Post -->
            <!-- Search Bar -->
            <!-- User Profile -->
        </nav>
    </header>