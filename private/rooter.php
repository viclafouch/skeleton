<?php 

/* Call view services */
include_once('core/viewServices.php');

if (!isset($_GET['module'])) { $module = DEFAULT_MODULE; } 
else { $module = $_GET['module']; }
if (!isset($_GET['action'])) { $action = DEFAULT_ACTION; } 
else { $action = $_GET['action']; }

$url = "default/controllers/" . $module . "/" . $action . ".php";
include_once($url);