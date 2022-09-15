<?php
class getFromClassByConstruct
{
    public function __construct($pozdrav="Ahoj")
    {
    }
    public function zobrazJmeno()
    {
        return $this->pozdrav;
    }
}

$test= new getFromClassByConstruct("Marvan");
echo($test->zobrazJmeno());
