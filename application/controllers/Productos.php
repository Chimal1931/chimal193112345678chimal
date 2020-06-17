<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Productos extends CI_Controller {

public function __construct()
  {
    parent::__construct();
    $this->load->helper(array('url','form'));
    $this->load->library(array('form_validation', 'session'));
     $this->load->model(array('Productos_model'));

   
 if(!$this->session->userdata("login")){
      redirect(base_url());
    } 
     }
	
	
	public function index()
	{
		    $data['title'] = 'ADMINISTRACIÓN ARTESANIAS';
        $query['lore'] = $this->Productos_model->obtenermed_tipo();
        $query['seccionmuestra'] = $this->Productos_model->obtener_secciones();

    	   $this->load->view('admin/header', $data);
    	  $this->load->view('admin/mostrar_Productos', $query);

        $this->load->view('admin/footer');

	}
       function fetch_user(){  
           $this->load->model("Productos_model");  
           $fetch_data = $this->Productos_model->make_datatables();  
           $data = array();  

           foreach($fetch_data as $row)  
           {  

                $sub_array = array(); 


                $sub_array[] = '<img src="'.base_url().'upload/'.$row->image.'" class="img-thumbnail" width="50" height="35" />';  
                $sub_array[] = $row->nombre;  
                $sub_array[] = $row->modelo;
                $sub_array[] = $row->descripcion;
                $sub_array[] = $row->color;
                $sub_array[] = '$'.$row->precio;
                $sub_array[] = $row->stock_actual;

                $sub_array[] = '<a class="btn btn-sm btn-primary update" style="background: #D953FA; border-color: #D953FA;" id="'.$row->id.'" title="EDITAR" ><i class="glyphicon glyphicon-pencil"></i> EDITAR</a>';  
                $sub_array[] = '<a class="btn btn-sm btn-primary delete" style="background: #D953FA; border-color: #D953FA;" id="'.$row->id.'" title="EDITAR" ><i class="glyphicon glyphicon-pencil"></i> ELIMINAR</a>'; 
                
         
                $data[] = $sub_array;  
           }  
           $output = array(  
                "draw"                    =>     intval($_POST["draw"]),  
                "recordsTotal"          =>      $this->Productos_model->get_all_data(),  
                "recordsFiltered"     =>     $this->Productos_model->get_filtered_data(),  
                "data"                    =>     $data  
           );  
           echo json_encode($output);  
      }  
      function user_action(){  
           if($_POST["action"] == "Add")  
           {  
                $insert_data = array(  
                     'nombre'          =>     $this->input->post('nombre'), 
                     'modelo'          =>     $this->input->post('modelo'),  
                     'descripcion'          =>     $this->input->post('descripcion'),  
                     'color'          =>     $this->input->post('color'),  
                     'precio'               =>     $this->input->post("precio"), 
                     'id_tipoproducto' => $this->input->post('id_tipoproducto'), 
                     'id_seccionmuestra' => $this->input->post('id_seccionmuestra'),
                     'stock_actual' => $this->input->post('stock_actual'),

                        
                     'activo' => 1,
                     'image'                    =>     $this->upload_imageinsert()  
                );  

              
           
                $this->load->model('Productos_model');  
                $this->Productos_model->insert_crud($insert_data);  
                echo 'Data Inserted';  
           }  

           if($_POST["action"] == "Edit")  
           {  

 
                
              if ($this->input->post('stock_entrante') == NULL) {
                 
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
                    'nombre'          =>     $this->input->post('nombre'), 
                     'modelo'          =>     $this->input->post('modelo'),  
                     'descripcion'          =>     $this->input->post('descripcion'),  
                     'color'          =>     $this->input->post('color'),  
                     'precio'               =>     $this->input->post("precio"),
                     'id_tipoproducto' => $this->input->post('id_tipoproducto'),
                     'id_seccionmuestra' => $this->input->post('id_seccionmuestra'),
                     'image'                    =>     $user_image  
                );
                  $this->Productos_model->update_crud($this->input->post("user_id"), $updated_data);  
         
                    echo 'swal({
                    position: "top-end",
                    icon: "success",
                    title: "PRODUCTO MODIFICADO CORRECTAMENTE",
                    showConfirmButton: false,
                    timer: 1500
                  })';  

            }else{

                      $insert_data = array(  
                     'id'          =>     $this->input->post('user_id'), 
                     'stock_entrante'          =>     $this->input->post('stock_entrante'), 
                     'stock_actual'          =>     $this->input->post('stock_actual'), 


                );  
                $this->load->model('Productos_model');  
                $this->Productos_model->insert_crude($insert_data);  
                echo 'Data Inserted';  
            }

                 

die();

               
           }  
      }  


       function upload_imageinsert()  
      {  
           if(isset($_FILES["user_image"]))  
           {  
                $extension = explode('.', $_FILES['user_image']['name']);  
                $new_name = rand() . '.' . $extension[1];  
                $destination = './upload/' . $new_name;  
                move_uploaded_file($_FILES['user_image']['tmp_name'], $destination);  
                return $new_name;  
           }  
      }  

      function upload_image()  
      {  
           $data =  $this->Productos_model->buscarregistro($_POST["user_id"]);  
           $path = 'upload/'.$data->image;
          if(is_readable($path) && unlink($path)){
           if(isset($_FILES["user_image"]))  
           {  
                $extension = explode('.', $_FILES['user_image']['name']);  
                $new_name = rand() . '.' . $extension[1];  
                $destination = './upload/' . $new_name;  
                move_uploaded_file($_FILES['user_image']['tmp_name'], $destination);  
                return $new_name;  
           }  
         }
      }  
      function fetch_single_user()  
      {  
           $output = array();  
           $this->load->model("Productos_model");  
           $data = $this->Productos_model->fetch_single_user($_POST["user_id"]);  
           foreach($data as $row)  
           {  
                $output['nombre'] = $row->nombre;  
                $output['modelo'] = $row->modelo;  
                $output['descripcion'] = $row->descripcion;  
                $output['color'] = $row->color;  
                $output['precio'] = $row->precio; 
                $output['id_tipoproducto'] = $row->id_tipoproducto;
                $output['id_seccionmuestra'] = $row->id_seccionmuestra;
                $output['stock_actual'] = $row->stock_actual;

               



                if($row->image != '')  
                {  
                     $output['user_image'] = '<img src="'.base_url().'upload/'.$row->image.'" class="img-thumbnail" width="50" height="35" /><input type="hidden" name="hidden_user_image" value="'.$row->image.'" />';  
                }  
                else  
                {  
                     $output['user_image'] = '<input type="hidden" name="hidden_user_image" value="" />';  
                }  
           }  
           echo json_encode($output);  
      }  

      function delete_single_user()  
      {  
          $this->load->model("Productos_model");  
          $data =  $this->Productos_model->buscarregistro($_POST["user_id"]);  

           $path = 'upload/'.$data->image;
          
          if(is_readable($path) && unlink($path)){

$delete = $this->Productos_model->delete_single_user($_POST["user_id"]);


          }else{
            echo "hievos";
            print_r($path);
          }


           }
      
    }
