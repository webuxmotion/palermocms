<?php

namespace Client\Controller;

use Core\Controller;

class MainController extends Controller
{
  public function __construct($di) {
    parent::__construct($di);

    $this->view->setLayout('default');
  }
}
