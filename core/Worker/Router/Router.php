<?php

namespace Core\Worker\Router;

class Router 
{
  private $routes = [];
  private $dispatcher;
  private $host;
  private $envs = [];
  private $pattern_prefix = null;

  public function __construct($host) {
    $this->host = $host;
  }

  public function add($key, $pattern, $controller, $method = 'GET') {
    $pattern_prefix = $this->pattern_prefix ? $this->pattern_prefix : null;
    $pattern = $pattern != '/' ? $pattern : null; 

    $this->routes[$key] = [
      'pattern' => $pattern_prefix . $pattern,
      'controller' => $controller,
      'method' => $method,
    ];
  }

  public function setPrefix($prefix) {
    $this->pattern_prefix = $prefix;
  }

  public function dispatch($method, $uri) {
    return $this->getDispatcher()->dispatch($method, $uri);
  }

  public function getDispatcher() {
    if ($this->dispatcher == null) {
      $this->dispatcher = new UrlDispatcher(); 
    }

    foreach ($this->routes as $route) {
      $this->dispatcher->register($route['method'], $route['pattern'], $route['controller']);
    }

    return $this->dispatcher;
  }
}
