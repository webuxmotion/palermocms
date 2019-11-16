<?php

namespace Admin\Controller;

use Admin\Model\User;

class LoginController extends MainController
{
  public function index() {
    $this->view->render('login');
  }

  public function login() {

    $user = new User();

    if (!$user->login(true)) {
        $_SESSION['error'] = 'Логин/пароль введены неверно';
    }

    if (User::isAdmin()) {
        redirect(ADMIN);
    } else {
        redirect();
    } 
  }

  public function logout() {
    if (isset($_SESSION['user'])) unset($_SESSION['user']);
    redirect();
  }
}
