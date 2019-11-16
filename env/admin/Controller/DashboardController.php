<?php

namespace Admin\Controller;

class DashboardController extends AdminProtectController
{
  public function index() {
    $this->view->setLayout('default')->render('pages/dashboard');
  }
}
