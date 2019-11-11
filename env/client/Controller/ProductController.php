<?php

namespace Client\Controller;

class ProductController extends MainController
{
  public function view($id, $id2) {
    echo $id . $id2;
  }
}
