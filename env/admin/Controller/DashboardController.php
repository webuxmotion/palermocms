<?php

namespace Admin\Controller;

class DashboardController extends AdminProtectController
{
  public function index() {
    $this->view->render('dashboard');
  }

  public function login() {
    echo 'Login';
  }
}
