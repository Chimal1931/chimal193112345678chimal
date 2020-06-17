<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cambio_inicio extends CI_Controller {

public function __construct()
  {
    parent::__construct();
    $this->load->helper(array('url','form'));
    $this->load->library(array('form_validation', 'session'));
     $this->load->model(array('Cambio_ini_model'));

   
 if(!$this->session->userdata("login")){
      redirect(base_url());
    } 
     }
	
	
	
  public function index()
  {
        $data['title'] = 'ADMINISTRACIÓN ARTESANIAS';
          $query['datosnav'] = $this->Cambio_ini_model->obtenerid();
         $this->load->view('admin/header', $data);
         $this->load->view('admin/Cambio_ini');
         $this->load->view('admin/footer');

  }
          

   function fetch_single_user()  
      {  
           $output = array();  
           $data = $this->Cambio_ini_model->fetch_single_user($_POST["id_nav"]);  
           foreach($data as $row)  
           {  
                $output['nombre_negocio'] = $row->nombre_negocio;  
                $output['t1'] = $row->t1;  
                $output['t2'] = $row->t2;  
                $output['t3'] = $row->t3;  
                $output['t4'] = $row->t4; 
                $output['t5'] = $row->t5;
                 $output['color_nav'] = $row->color_nav;

               
                if($row->image != '')  
                {  
                     $output['user_image'] = '<img src="'.base_url().'images/'.$row->image.'" class="img-thumbnail" width="50" height="35" /><input type="hidden" name="hidden_user_image" value="'.$row->image.'" />';  
                }  
                else  
                {  
                     $output['user_image'] = '<input type="hidden" name="hidden_user_image" value="" />';  
                }  
 
           }  
           echo json_encode($output);  
      }  




      function cambio_nav(){  
           if($_POST["action"] == "Edit")  
           {  

                $user_image = '';  
                if($_FILES["user_image"]["name"] != '')  
                {  
                     $user_image = $this->upload_image();  
                }  
                else  
                {  
                     $user_image = $this->input->post("hidden_user_image");  
                } 
                 $updated_data = array(  
                    'nombre_negocio'          =>     $this->input->post('nombre_negocio'), 
                     't1'          =>     $this->input->post('t1'),  
                     't2'          =>     $this->input->post('t2'),  
                     't3'          =>     $this->input->post('t3'),  
                     't4'               =>     $this->input->post("t4"),
                     't5' => $this->input->post('t5'),
                     'color_nav' => $this->input->post("color_nav"),
                     'image'                    =>     $user_image  
                );

              
                  $this->Cambio_ini_model->update_crud($this->input->post("id_nav"), $updated_data);  
         
           }  
      }  


 function upload_image()  
      {  
           $data =  $this->Cambio_ini_model->buscarregistro($_POST["id_nav"]);  
           $path = 'images/'.$data->image;
          if(is_readable($path) && unlink($path)){
           if(isset($_FILES["user_image"]))  
           {  
                $extension = explode('.', $_FILES['user_image']['name']);  
                $new_name = rand() . '.' . $extension[1];  
                $destination = './images/' . $new_name;  
                move_uploaded_file($_FILES['user_image']['tmp_name'], $destination);  
                return $new_name;  
           }  
         }
      } 





 }  
       
















      
    
