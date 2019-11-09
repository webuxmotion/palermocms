<?php

namespace Core\Worker\Router;

class Router 
{
  private $routes = [];
  private $dispatcher;
  private $host;
  private $envs = [];
  private $pattern_path = null;

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

  public function setEnvironments($envs) {
    $this->envs = $envs;
  }

  public function getEnv($uri) {

    if ($uri == '/') {
      return $this->envs['/'];
    }

    $uri_len = strlen($uri);

    foreach ($this->envs as $path => $env) {
      if ($path !== '/') {
        $path_len = strlen($path);

        if ($uri_len > $path_len) {
          if ($uri[$path_len] == '/') {
            $pos = strpos($uri, $path);

            if ($pos === 0) {
              $this->pattern_prefix = $path;
              return $env;
            }
          }
        }
        else {
          $pos = strpos($uri, $path);

          if ($pos === 0) {
            $this->pattern_prefix = $path;
            return $env;
          }
        }
      }
    }

    return $this->envs['/'];
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
