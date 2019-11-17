<?php

namespace Client\Controller;

class HomeController extends MainController
{
  public function index() {
    $data = [
      'name' => $this->config['main']['title']
    ];

    $this->view
      ->css(['styles-index'])
      ->js(['main'])
      ->render('pages/index/index', $data);
  }

  public function about() {
    $this->view
      ->js(['about'])
      ->render('pages/about/about');
  }
}
