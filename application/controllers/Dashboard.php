<?php
class Dashboard extends CI_Controller{

    public function _construct(){
      parent_construct();
    }

    public function index(){

      $data['path_link'] = "";
      $this->load->view("Dashboard/mp_default",$data);
    }

}





?>
