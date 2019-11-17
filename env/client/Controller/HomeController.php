<?php

namespace Client\Controller;

class HomeController extends MainController
{
  public function index() {
    $this->view
      ->css(['styles-animation-space'])
      ->js(['animation-space'])
      ->render('pages/animation/space/index');
  }

  public function about() {
    $this->view
      ->js(['about'])
      ->render('pages/about/about');
  }
}
