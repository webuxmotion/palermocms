<?php

namespace Core;

require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/functions.php';

try {
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
