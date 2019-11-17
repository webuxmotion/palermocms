<?php

$this->router->add('home', '/', 'HomeController:index');
$this->router->add('product', '/user/12', 'ProductController:index');
$this->router->add('product_single', '/product/(id:int)', 'ProductController:view');
$this->router->add('product_single_ddd', '/product/(id:int)/(id2:int)', 'ProductController:view');
$this->router->add('p', '/(id:int)/product/(id2:int)', 'ProductController:view');

$this->router->add('about', '/about', 'HomeController:about');
