<?php

namespace Core\Provider\View;

use Core\Provider\AbstractProvider;
use Core\Worker\Template\View;

class Provider extends AbstractProvider
{
  public $providerName = 'view';

  public function init() {
    $provider = new View();
    $this->di->set($this->providerName, $provider);
  }
}
