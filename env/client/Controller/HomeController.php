<?php

namespace Client\Controller;

class HomeController extends MainController
{
  public function index() {
    $data = [
      'name' => 'Andrii'
    ];

    $this->view->render('index', $data);
  }
}
