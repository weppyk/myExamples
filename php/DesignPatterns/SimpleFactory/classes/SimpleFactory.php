<?php

class SimpleFactory
{
    public function createGuitar($brand = "Ibanez", $model = "RG 550")
    {
        return new Guitar($brand, $model);
    }
    public function createDowina($model = "D-100")
    {
        return new Guitar("Dowina", $model);
    }
    public function createFurchDurango()
    {
        return new Guitar("Furch", "Durango");
    }

}