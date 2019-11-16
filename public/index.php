<?php 

define("ROOT",   dirname(__DIR__));
define("DEBUG",   1);
define("TMP",   ROOT . '/tmp');
define("WWW",   ROOT . '/public');
define("PATH", "http://{$_SERVER['HTTP_HOST']}");
define("ADMIN", PATH . '/backend');

define("LAYOUT", 'default');

require_once ROOT . '/core/bootstrap.php';
