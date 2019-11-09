<?php

namespace Core\Worker\Config;

class Config
{
  public static function item($key, $group = 'main') {
    $items = static::file($group);

    return isset($items[$key]) ? $items[$key] : null;
  }    

  public static function file($group) {
    $path = ROOT . '/env/' . ENV . '/Config/' . $group . '.php';

    if (file_exists($path)) {
      $items = require_once $path;

      if (is_array($items)) {
        return $items;
      }
      else {
        throw new \Exception(
          sprintf('Config file <strong>%s</strong> is not a valid array.', $path)
        );
      }
    } 
    else {
      throw new \Exception(
        sprintf('Cannot load config from file. File <strong>%s</strong> does not exist', $path)
      );
    }

    return false;
  }    
}
