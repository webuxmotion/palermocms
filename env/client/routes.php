<?php

$this->router->add('home', '/', 'HomeController:index');
$this->router->add('product', '/user/12', 'ProductController:index');
$this->router->add('product_single', '/product/(id:int)', 'ProductController:view');
