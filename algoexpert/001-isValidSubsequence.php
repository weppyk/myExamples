<?php
function isValidSubsequence($array, $sequence) {
    $countArray = count($array);
    $sequenceIndex = 0;
    /*foreach($array as $value){
        if($sequence[$sequenceIndex] == $value){
            $sequenceIndex++;
        }
        if( $sequence[$sequenceIndex] >= $countArray){
            return true;
        }        
    }
    return false;*/
}

$array = [5, 1, 22, 25, 6, -1, 8, 10];
$sequence = [1, 6, -1, 10];

echo isValidSubsequence($array, $sequence);