<?php

namespace Admin\Controller;

class LoginController extends MainController
{
  public function index() {
    $this->view->render('login');
  }
}
