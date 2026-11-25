<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
// Verbinding met de database. Dit bestand hoef je niet aan te passen.
$pdo = new PDO("mysql:host=mysql_db;dbname=mijn_webshop;charset=utf8mb4", "root", "root");
$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
?>
    
</body>
</html>