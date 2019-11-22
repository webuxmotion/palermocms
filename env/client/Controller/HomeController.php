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

  public function login() {
    $_POST = json_decode(file_get_contents('php://input'), true);
    debug($_POST);
    echo json_encode([
      "success" => true,
      "password" => $_POST['password']
    ], JSON_PRETTY_PRINT);
  }
}
