<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Clientes extends CI_Controller {

public function __construct()
  {
    parent::__construct();
    $this->load->helper(array('url','form'));
    $this->load->library(array('form_validation', 'session'));
     $this->load->model(array('Clientes_model'));

   
 if(!$this->session->userdata("login")){
      redirect(base_url());
    } 
     }
	
	
	
  public function index()
  {
        $data['title'] = 'ADMINISTRACIÓN ARTESANIAS';

         $this->load->view('admin/header', $data);
        $this->load->view('admin/mostrar_clientes');

        $this->load->view('admin/footer');

  }
       function fetch_user(){  
           $fetch_data = $this->Clientes_model->make_datatables();  
           $data = array();  
           foreach($fetch_data as $datoscliente)  
           {  

        $sub_array = array();
                $sub_array[] = $datoscliente->id_usuario;

        $sub_array[] = $datoscliente->nombre;
        $sub_array[] = $datoscliente->apellido_p;
        $sub_array[] = $datoscliente->apellido_m;
        $sub_array[] = $datoscliente->telefono;
        $sub_array[] = $datoscliente->email;
        $sub_array[] = $datoscliente->username;
        $sub_array[] = '<a class="btn btn-sm btn-primary update" style="background: #D953FA; border-color: #D953FA;" id="'.$datoscliente->id_usuario.'" title="EDITAR" ><i class="glyphicon glyphicon-pencil"></i> EDITAR</a>';  
         $sub_array[] = '<a class="btn btn-sm btn-primary delete" style="background: #D953FA; border-color: #D953FA;" id="'.$datoscliente->id_usuario.'" title="EDITAR" ><i class="glyphicon glyphicon-pencil"></i> ELIMINAR</a>'; 


                $data[] = $sub_array;  
           }  
           $output = array(  
                "draw"                    =>     intval($_POST["draw"]),  
                "recordsTotal"          =>      $this->Clientes_model->get_all_data(),  
                "recordsFiltered"     =>     $this->Clientes_model->get_filtered_data(),  
                "data"                    =>     $data  
           );  
           echo json_encode($output);  
      }  

  public function validacionusu()
  {
  // VALIDACION PARA SABER SI EXISTE O NO EL ID CLIENTE
                  $this->load->model("Clientes_model");  
                  if($this->Clientes_model->validarusuario($_POST["username"]))  
                  {  
                       echo '<label class="text-danger"><span class="glyphicon glyphicon-remove"></span>USUARIO NO DISPONIBLE</label>';  
                  }  
                  else  
                  {  
                       echo '<label class="text-success"><span class="glyphicon glyphicon-ok"></span> USUARIO DISPONIBLE</label>';  
                  }
                  

  }
   public function validacionem()
  {
  // VALIDACION PARA SABER SI EXISTE O NO EL ID CLIENTE
                 
                  if($this->Clientes_model->validaremail($_POST["email"]))  
                  {  
                       echo '<label class="text-danger"><span class="glyphicon glyphicon-remove"></span>ESTE CORREO YA ESTA EN USO</label>';  
                  }  
                  else  
                  {  
                       echo '<label class="text-success"><span class="glyphicon glyphicon-ok"></span> CORREO DISPONIBLE</label>';  
                  }

  }

      function accioncliente(){  
              // AL MOMENTO DE ENVIAR RECIBE Y SI ES AGREGAR O EDITAR CLIENTE
           if($_POST["action"] == "Add")  
           {  
                $insert_data = array(  
                     'nombre'          =>     $this->input->post('nombre'), 
                     'apellido_p'          =>     $this->input->post('apellido_p'),  
                     'apellido_m'          =>     $this->input->post('apellido_m'),  
                     'telefono'          =>     $this->input->post('telefono'),  
                     'email'               =>     $this->input->post("email"), 
                     'username' => $this->input->post('username'), 
                     'password' =>  md5($this->input->post('password')),
                     'estado' => 1,
                     'rol_id' => 2,
                );  

                   if($this->Clientes_model->validarusuario($_POST["username"]). $this->Clientes_model->validaremail($_POST["email"]) )  
                {  
                  $query['fail'] = "NO SE PUDO GUARDAR LA INFORMACION";
                  $query['valid'] = 0;
                  echo json_encode($query);
                }  
                else  
                {  
                   $this->Clientes_model->insert_crud($insert_data);  
                   $query['success'] = "DATOS GUARDADOS CORRECTAMENTE";
                   $query['valid'] = 1;
                   echo json_encode($query);
                }  
           }

           // PARA EDITAR CLIENTE

              if($_POST["action"] == "Edit")  
           {  
                $updated_data = array(  
                     'nombre'          =>     $this->input->post('nombre'), 
                     'apellido_p'          =>     $this->input->post('apellido_p'),  
                     'apellido_m'          =>     $this->input->post('apellido_m'),  
                     'telefono'          =>     $this->input->post('telefono'),  
                     'email'               =>     $this->input->post("email"), 
                     'username' => $this->input->post('username'), 
                ); 
                 
                  if($this->Clientes_model->actualizarcliente($this->input->post("id_usuario"), $updated_data))  
                {  
                  $query['fail'] = "NO SE PUDO GUARDAR LA INFORMACION";
                  $query['valid'] = 0;
                  echo json_encode($query);
                }  
                else  
                {  
                   $query['success'] = "DATOS GUARDADOS CORRECTAMENTE";
                   $query['valid'] = 1;
                   echo json_encode($query);
                }  

                
          }


        }  
      
      function buscarcliente()  
      {  
           $output = array();  
           $data = $this->Clientes_model->buscarcliente($_POST["id_usuario"]);  
           foreach($data as $row)  
           {  
                $output['nombre'] = $row->nombre;  
                $output['apellido_p'] = $row->apellido_m;  
                $output['apellido_m'] = $row->apellido_m;  
                $output['telefono'] = $row->telefono;  
                $output['email'] = $row->email; 
                $output['username'] = $row->username;
                                $output['password'] = $row->password;

 
           }  
           echo json_encode($output);  
      }  

     


         function delete_single_user()  
      {  
           $this->load->model("Clientes_model");  
           $this->Clientes_model->delete_single_user($_POST["id_usuario"]);  
           echo 'Data Deleted';  
      }                                                   
      
    }
