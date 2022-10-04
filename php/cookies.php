<?php
    $cookie_name = "user";
    $cookie_value = "John Doe";
    $expiration = time() + (86400 * 30); // 86400 = 1 day
    setcookie($cookie_name, $cookie_value, $expiration,"/"); 
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Učíme se cookies</h1>
    <?php
        if(!isset($_COOKIE[$cookie_name])) {
            echo "Cookie s názvem " . $cookie_name . " neexistuje.";
        } else {
            echo "Cookie s názvem " . $cookie_name . " existuje.<br>";
            echo "Hodnota je: " . $_COOKIE[$cookie_name];
        }
    ?>
</body>
</html>