<?php session_start(); 
    $_SESSION["pozdrav"] = "Zdravím vás z session1.php";
?>

<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="session2.php">Odkaz na session2.php</a>
</body>
</html>