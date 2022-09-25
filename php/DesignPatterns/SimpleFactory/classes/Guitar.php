<?php
/**
 * Guitar in context service repairment
 */
class Guitar
{
    public $brand;
    public $model;

    public function __construct($brand, $model)
    {
        $this->brand = $brand;
        $this->model = $model;
    }

    public function repair()
    {
        echo "Repairing guitar " . $this->brand . " " . $this->model . ".<br>";
    }

}