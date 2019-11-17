<?php

namespace Client\Controller;

class AnimationController extends MainController
{
  public function index() {
    $this->view
      ->css(['styles-animation-index'])
      ->js(['animation'])
      ->render('pages/animation/index/index');
  }

  public function perever() {
    $this->view
      ->css(['styles-animation-perever'])
      ->js(['animation-perever'])
      ->render('pages/animation/perever/index');
  }

  public function pixi() {
    $this->view
      ->css(['styles-animation-pixi'])
      ->js(['animation-pixi'])
      ->render('pages/animation/pixi/index');
  }
  
  public function space() {
    $this->view
      ->css(['styles-animation-space'])
      ->js(['animation-space'])
      ->render('pages/animation/space/index');
  }
}
