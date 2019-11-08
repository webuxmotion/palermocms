<?php

namespace Core\Provider\Router;

use Core\Provider\AbstractProvider;
use Core\Worker\Router\Router;

class Provider extends AbstractProvider
{
  public $providerName = 'router';

  public function init() {
    $provider = new Router('http://localhost:50001');
    $this->di->set($this->providerName, $provider);
  }
}
