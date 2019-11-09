<?php

namespace Core\Provider\Config;

use Core\Provider\AbstractProvider;
use Core\Worker\Config\Config;

class Provider extends AbstractProvider
{
  public $providerName = 'config';

  public function init() {
    $config['main'] = Config::file('main');
    $this->di->set($this->providerName, $config);
  }
}
