<?php
spl_autoload_register(function ($class) {
    $class = str_replace('\\', '/', $class);
    require("classes/$class.php");
});

$guitarFactory = new SimpleFactory();
$ibanez = $guitarFactory->createGuitar();
$ibanez->repair();

$dowina = $guitarFactory->createDowina("D-100");
$dowina->repair();

$furchDurango= $guitarFactory->createFurchDurango();
$furchDurango->repair();