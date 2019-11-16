<?php

namespace Client\Controller;

class HomeController extends MainController
{
  public function index() {
    $data = [
      'name' => $this->config['main']['title']
    ];

    $this->view->setLayout('default')->render('pages/index', $data);
  }
}
