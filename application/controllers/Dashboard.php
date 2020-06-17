<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dashboard extends CI_Controller {
  public function __construct()
  {
    parent::__construct();
    $this->load->helper(array('url','form'));
    $this->load->library(array('form_validation', 'session'));
   
    if(!$this->session->userdata("login")){
      redirect(base_url());
    }
  }

  public function index()
  {
    $data['title'] = 'ADMINISTRACIÓN ARTESANIAS';
    
    $this->load->view('admin/header', $data);
        $this->load->view('admin/footer');

  }






}
