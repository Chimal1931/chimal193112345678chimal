<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Auth extends CI_Controller {

		public function __construct(){
			parent::__construct();
			$this->load->model("Usuarios_model");
		}


			public function index()
	{
		if($this->session->userdata("login")){
			redirect(base_url()."Dashboard");
		}else{
			$this->load->view('admin/login');
		}

	}


	public function login(){

		$username = $this->input->post("username");
		$password = $this->input->post("password");

		$res = $this->Usuarios_model->login_acceso($username, $password);
if(!$res){
	$this->session->set_flashdata("error", "El usuario y/o contraseña con incorrectos");
	redirect(base_url()."Auth");
}
else{
	$data = array(
			'id_usuario' => $res->id_usuario,
			'nombre' => $res->nombre,
			'rol_id' => $res->rol_id,
			'login' => TRUE
	);
	$this->session->set_userdata($data);
	redirect(base_url()."Dashboard");
}

	}



	public function logout(){
		$this->session->sess_destroy();
		redirect(base_url()."Auth");
	}
}