<?php

include('config.php');

$response = @file_get_contents($config['dataRepo'] . $_GET['q']);

if(!$response) http_response_code(500);

echo($response);