<?php
	// Debugger
	include_once("core/debugger.php");

	// Connect your database
	include_once("database/database.php");

	// Config your params
	include_once("config/config.php");

	// Inject your own rules
	include_once("rules/rules.php");

	if (!isset($_GET['module'])) { $module = DEFAULT_MODULE; } 
	else { $module = $_GET['module']; }

	if (!isset($_GET['action'])) { $action = DEFAULT_ACTION; } 
	else { $action = $_GET['action']; }

	$location = "app/controller/" . $module . "/" . $action . ".php";

	if(file_exists($location)) { include_once("$location"); }
	else { die("Page not found"); }
