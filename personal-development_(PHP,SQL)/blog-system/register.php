<?php include 'partials/header.php' ?>

<h2>Register</h2>

<form action="" method="POST">
    <label for="name">Name:</label>
    <input type="text" name="name" required>
    
    <label for="password">Password:</label>
    <input type="password" name="password" required>
    
    <label for="email">Email:</label>
    <input type="email" name="email" required>
    
    <input type="submit" value="Register">
</form>

<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $password = $_POST['password'];
    $email = $_POST['email'];

    // Hash the password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO users (name, password, email, role) VALUES (?, ?, ?, 1)");
    $stmt->bind_param("sss", $name, $hashed_password, $email);

    // Execute the statement
    if ($stmt->execute()) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
}
?>

<?php include 'partials/footer.php' ?>