<?php

namespace Admin\Controller;

class ErrorController extends MainController
{
  public function page404() {
    $this->view->render('page404');
  }
}
