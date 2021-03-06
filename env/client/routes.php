<?php

$this->router->add('home', '/', 'HomeController:index');
$this->router->add('product', '/user/12', 'ProductController:index');
$this->router->add('product_single', '/product/(id:int)', 'ProductController:view');
$this->router->add('product_single_ddd', '/product/(id:int)/(id2:int)', 'ProductController:view');
$this->router->add('p', '/(id:int)/product/(id2:int)', 'ProductController:view');

$this->router->add('about', '/about', 'HomeController:about');

$this->router->add('animation-main', '/animation', 'AnimationController:index');
$this->router->add('animation/perever', '/animation/perever', 'AnimationController:perever');
$this->router->add('animation/pixi', '/animation/pixi', 'AnimationController:pixi');
$this->router->add('animation/space', '/animation/space', 'AnimationController:space');
