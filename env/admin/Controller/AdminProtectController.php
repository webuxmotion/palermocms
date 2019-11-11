<?php

namespace Admin\Controller;

use Core\Controller;
use Core\Worker\Auth\Auth;

class AdminProtectController extends Controller
{
  protected $auth;

  public function __construct($di) {
    parent::__construct($di);

    $this->auth = new Auth();

    if (!$this->auth->authorized) {
      header('Location: /backend/login');
      exit;
    }
  }
}
