<?php

namespace Core\Provider\Request;

use Core\Provider\AbstractProvider;
use Core\Worker\Request\Request;

class Provider extends AbstractProvider
{
  public $providerName = 'request';

  public function init() {
    $provider = new Request();
    $this->di->set($this->providerName, $provider);
  }
}
