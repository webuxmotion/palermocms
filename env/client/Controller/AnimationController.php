<?php

namespace Client\Controller;

class AnimationController extends MainController
{
  public function perever() {
    $this->view
      ->css(['styles-animation-perever'])
      ->js(['animation-perever'])
      ->render('pages/animation/perever/index');
  }
}
