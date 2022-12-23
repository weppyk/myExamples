<?php

class FioClient
{
    const API_URL_BASE = "https://www.fio.cz/ib_api/rest/";
    private $apiToken;
    public function __construct($apiToken)
    {
        $this->apiToken = $apiToken;
    }

        public function getBalance()
    {
        $today = date("Y-m-d");
        $url = sprintf(self::API_URL_BASE."periods/%s/%s/%s/transactions.json", $this->apiToken, $today, $today);
        $response = file_get_contents($url);
        $response = json_decode($response, true);
        $balance = $response['accountStatement']['info']['closingBalance'];
        return $balance;

    }
}

$token = "YOUR_TOKEN";
$fioClient = new FioClient($token);

echo $fioClient->getBalance();