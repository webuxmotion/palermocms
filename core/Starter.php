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
    $this->router = $this->di->get('router');
  }

  public function run() {
    try {

      $this->loadRoutes();

    } catch (\Exception $e) {
      echo $e->getMessage();
      exit;
    }
  }

  public function loadRoutes() {

      $this->router->setPrefix(PREFIX);

      require ROOT . '/env/' . ENV . '/routes.php';
      
      $routerDispatch = $this->router->dispatch(Common::getMethod(), Common::getPathUrl());

      if ($routerDispatch == null) {
        $routerDispatch = new DispatchedRoute('ErrorController:page404');
      }

      list($class, $action) = explode(':', $routerDispatch->getController(), 2);

      $controller = '\\' . ucfirst(ENV) . '\\Controller\\' . $class;
      $parameters = $routerDispatch->getParameters();

      call_user_func_array([new $controller($this->di), $action], $parameters);
  }
}
