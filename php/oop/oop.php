<?php
class Clovek {
    public $jmeno;
    public $prijmeni;
    public function __construct($jmeno, $prijmeni) {
        $this->jmeno = $jmeno;
        $this->prijmeni = $prijmeni;
    }
    public function pozdrav() {
        echo "Ahoj, já jsem " . $this->jmeno . " " . $this->prijmeni . ".<br>";
    }
    public function jduDoPrace() {
        echo "Jdu do práce. Je " . date("H:i:s") . ".<br>";
    }
}

$pavel = new Clovek("Pavel", "Novák");
$pavel->pozdrav();
$pavel->jduDoPrace();

$jana = new Clovek("Jana", "Nová");
$jana->pozdrav();
$jana->jduDoPrace();

$dalibor = new Clovek("Dalibor", "Nový");
$dalibor->pozdrav();
$dalibor->jduDoPrace();


if($pavel instanceof Clovek) {
    echo "Pavel je člověk.<br>";
} else {
    echo "Pavel není člověk.<br>";
}

if(class_exists("Clovek")) {
    echo "Třída Clovek existuje.<br>";
} else {
    echo "Třída Clovek neexistuje.<br>";
}

if(method_exists("Clovek", "pozdrav")) {
    echo "Metoda pozdrav existuje.<br>";
} else {
    echo "Metoda pozdrav neexistuje.<br>";
}