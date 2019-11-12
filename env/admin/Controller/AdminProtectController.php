<?php

namespace Admin\Controller;

use Core\Controller;
use Admin\Model\User;

class AdminProtectController extends Controller
{
  public function __construct($di) {
    parent::__construct($di);

    if (!User::isAdmin()) {
      redirect(ADMIN . '/login');
    }
  }
}
