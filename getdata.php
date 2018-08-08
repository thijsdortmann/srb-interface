<?php

$dataRepo = "http://ut147284.ewi.utwente.nl:23450/";

$response = @file_get_contents($dataRepo . $_GET['q']);

if(!$response) http_response_code(500);

echo($response);