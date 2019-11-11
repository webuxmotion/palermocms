<?php

namespace Core;

use Core\DI;

abstract class Controller 
{
  protected $di;
  protected $view;
  protected $config;
  protected $request;

  public function __construct(DI $di) {
    $this->di = $di;
    $this->view = $this->di->get('view');
    $this->config = $this->di->get('config');
    $this->request = $this->di->get('request');
  }
}
