<?php

$this->router->add('home', '/', 'DashboardController:index');
$this->router->add('login', '/login', 'LoginController:index');
$this->router->add('login-post', '/login', 'LoginController:login', 'POST');
