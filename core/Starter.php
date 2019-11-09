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

      $this->router->setEnvironments([
        '/' => 'client',
        '/backend' => 'admin',
      ]);

      $env = $this->router->getEnv(Common::getPathUrl());

      require ROOT . '/env/' . $env. '/routes.php';
      
      $routerDispatch = $this->router->dispatch(Common::getMethod(), Common::getPathUrl());

      if ($routerDispatch == null) {
        $routerDispatch = new DispatchedRoute('ErrorController:page404');
      }

      list($class, $action) = explode(':', $routerDispatch->getController(), 2);

      $controller = '\\' . ucfirst($env) . '\\Controller\\' . $class;
      $parameters = $routerDispatch->getParameters();

      call_user_func_array([new $controller($this->di), $action], $parameters);

    } catch (\Exception $e) {
      echo $e->getMessage();
      exit;
    }
  }
}
