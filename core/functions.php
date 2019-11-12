<?php

function redirect($http = false){
  if($http){
      $redirect = $http;
  }else{
      $redirect = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : PATH;
  }
  header("Location: $redirect");
  exit;
}

function debug($arr) {
  echo '<pre>' . print_r($arr, true) . '</pre>';
}

function getEnvGetPrefix($envs, $uri) {

    if ($uri == '/') {
      return [
        'env' => $envs['/'],
        'prefix' => null
      ];
    }

    $uri_len = strlen($uri);

    foreach ($envs as $path => $env) {
      if ($path !== '/') {
        $path_len = strlen($path);

        if ($uri_len > $path_len) {
          if ($uri[$path_len] == '/') {
            $pos = strpos($uri, $path);

            if ($pos === 0) {
              return [
                'env' => $env,
                'prefix' => $path
              ];
            }
          }
        }
        else {
          $pos = strpos($uri, $path);

          if ($pos === 0) {
            return [
              'env' => $env,
              'prefix' => $path
            ];
          }
        }
      }
    }

    return [
      'env' => $envs['/'],
      'prefix' => null
    ];
}
