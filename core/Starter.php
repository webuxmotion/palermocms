<?php

namespace Core;

use Core\Helper\Common;
use Core\Worker\Router\DispatchedRoute;

class Starter
{
  private $di;
  public $db;
  public $router;

  public function __construct($di) {
    $this->di = $di;
    $this->db = $this->di->get('db');
    $this->router = $this->di->get('router');
  }

  public function run() {
    try {
      $this->router->add('home', '/', 'HomeController:index');
      $this->router->add('product', '/user/12', 'ProductController:index');
      $this->router->add('product_single', '/product/(id:int)', 'ProductController:view');

      $routerDispatch = $this->router->dispatch(Common::getMethod(), Common::getPathUrl());

      if ($routerDispatch == null) {
        $routerDispatch = new DispatchedRoute('ErrorController:page404');
      }

      list($class, $action) = explode(':', $routerDispatch->getController(), 2);

      $controller = '\\Client\\Controller\\' . $class;
      $parameters = $routerDispatch->getParameters();

      call_user_func_array([new $controller($this->di), $action], $parameters);

    } catch (\Exception $e) {
      echo $e->getMessage();
      exit;
    }
  }
}
