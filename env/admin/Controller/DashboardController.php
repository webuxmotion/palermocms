<?php

namespace Admin\Controller;

class DashboardController extends MainController
{
  public function index() {
    $this->view->render('dashboard');
  }

  public function login() {
    echo 'Login';
  }
}
