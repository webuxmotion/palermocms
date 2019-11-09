<?php

namespace Admin\Controller;

class HomeController extends MainController
{
  public function dashboard() {
    echo 'Admin Index page';
  }

  public function login() {
    echo 'Login';
  }
}
