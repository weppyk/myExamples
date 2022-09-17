<?php
class testMultifunkce
{
    public $name;
    public function __construct()
    {
     $this->name="";
    }
    public function nastavJmeno($pozdrav)
    {
        $this->name= $pozdrav;
        return $this;//vrací objekt třídy a tím umožňuje volání dalších metod
    }
    public function pridejTitul($titul)
    {
        $this->name= $titul.$this->name;
        return $this; //vrací objekt třídy a tím umožňuje volání dalších metod
    }
    public function getName()
    {
        return $this->name;
    }

}
$test= new testMultifunkce();
$test->nastavJmeno("Marvan")->pridejTitul("Ing.")->pridejTitul("Doc.")->pridejTitul("PhD.");
echo($test->name);
?>