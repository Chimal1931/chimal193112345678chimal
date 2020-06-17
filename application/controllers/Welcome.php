<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

		public function __construct()
  {
    parent::__construct();
    $this->load->helper(array('url','form'));
    $this->load->model(array('Cambio_ini_model'));

   
 
     }
	 
	 	public function index()
	{
		$query['obtener_menu'] = $this->Cambio_ini_model->obtdatenav();
		$this->load->view('pagprincipal/index');
		$this->load->view('pagprincipal/nav', $query);
		$this->load->view('pagprincipal/slider');
		$this->load->view('pagprincipal/contenido');
		$this->load->view('pagprincipal/footer');


	}
}
