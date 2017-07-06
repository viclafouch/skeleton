<?php 

	error_reporting(E_ERROR | E_WARNING | E_PARSE);

	function console_log($data) {
	  echo '<script>';
	  echo 'console.log('.json_encode($data).')';
	  echo '</script>';
	}