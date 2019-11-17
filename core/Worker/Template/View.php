<?php

namespace Core\Worker\Template;

use Core\Worker\Template\Theme;

class View 
{
  protected $theme;
  public $layout = null;

  public function __construct() {
    $this->theme = new Theme();
  }

  public function setLayout($name) {
    $this->layout = $name;
    return $this;
  }

  public function css($val) {
    $this->theme->setCss($val);

    return $this;
  }

  public function js($val) {
    $this->theme->setJs($val);

    return $this;
  }

  public function render($template, $vars = []) {
    $templatePath = ROOT . '/env/' . ENV . '/themes/default/' . $template . '.php'; 

    if (!is_file($templatePath)) {
      throw new \InvalidArgumentException(
        sprintf('Template "%s" not found in "%s"', $template, $templatePath)
      );
    }

    $this->theme->setData($vars);
    extract($vars);

    ob_start();
    ob_implicit_flush(0);

    try {
      require $templatePath;
      $content = ob_get_clean();
    } catch (\Exception $e) {
      ob_end_clean();
      throw $e;
    }


    if (null !== $this->layout) {
      $layoutFile = ROOT . "/env/" . ENV . "/themes/default/layouts/{$this->layout}.php";

      if (is_file($layoutFile)) {
        require $layoutFile;
      } else {
        throw new \Exception("Layout $layoutFile not found", 500);
      }
    } else {
      echo $content;
    }
  }
}
