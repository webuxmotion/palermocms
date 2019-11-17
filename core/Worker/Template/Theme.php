<?php

namespace Core\Worker\Template;

class Theme
{
  const RULES_NAME_FILE = [
    'header' => 'header-%s',
    'footer' => 'footer-%s',
    'sidebar' => 'sidebar-%s',
  ];

  public $url = '';
  protected $data = [];
  public $css = [];
  public $js = [];

  public function header($name = null) {
    $name = (string) $name;
    $file = 'header';

    if ($name !== '') {
      $file = $name;
    }

    $this->loadTemplateFile($file);
  }

  public function setCss($val) {
    $this->css = $val;
  }

  public function setJs($val) {
    $this->js = $val;
  }

  public function footer($name = '') {
    $name = (string) $name;
    $file = 'footer';

    if ($name !== '') {
      $file = $name;
    }

    $this->loadTemplateFile($file);
  }

  public function block($name = '', $data = []) {
    $name = (string) $name;

    if ($name !== '') {
      $this->loadTemplateFile($name, $data);
    }
  }

  private function loadTemplateFile($nameFile, $data = []) {
    $templateFile = ROOT . '/env/' . ENV . '/themes/default/' . $nameFile . '.php';

    if (is_file($templateFile)) {
      extract($this->data);
      extract($data);
      require $templateFile;
    }
    else {
      throw new \Exception(
        sprintf('View file "%s" does not exist', $templateFile)
      );
    }
  }

  public function getData() {
    return $this->data;
  }

  public function setData($data) {
    $this->data = $data;
  }

  public function getCss() {
    $res = '';

    foreach ($this->css as $item) {
      $res .= '<link rel="stylesheet" href="/' . ENV . '/css/' . $item . '.css" />';
    }

    return $res;
  }

  public function getJs() {
    $res = '';

    foreach ($this->js as $item) {
      $res .= '<script src="/'.  ENV .'/js/' . $item . '.js"></script>';
    }

    return $res;
  }
}
