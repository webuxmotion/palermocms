<?php

namespace Core;

use Core\Helper\Common;
use Core\Worker\ErrorHandler\ErrorHandler;

require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/functions.php';

try {

  new ErrorHandler();

  $envs = [
    '/' => 'client',
    '/backend' => 'admin',
  ];

  $envPrefix = getEnvGetPrefix($envs, Common::getPathUrl());
  $env = $envPrefix['env'];
  $prefix = $envPrefix['prefix'];

  define('ENV', $env);
  define('PREFIX', $prefix);

  $di = new DI();

  $providers = require __DIR__ . '/Provider/providerList.php';

  foreach ($providers as $provider) {
    $provider = new $provider($di);
    $provider->init();
  }

  $starter = new Starter($di);
  $starter->run();

} catch (\ErrorException $e) {
  echo $e->getMessage();
}
