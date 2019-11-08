<?php

namespace Core\Provider\Db;

use Core\Provider\AbstractProvider;
use Core\Worker\Db\Connection;

class Provider extends AbstractProvider
{
  public $providerName = 'db';

  public function init() {
    $config = [
      'host' => 'mysql',
      'db_name' => 'palermocms_db',
      'username' => 'palermocmsuser',
      'password' => 'palermocmspass',
      'charset' => 'utf8'
    ];
    $provider = new Connection($config);
    $this->di->set($this->providerName, $provider);
  }
}
