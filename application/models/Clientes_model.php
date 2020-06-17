<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Clientes_model extends CI_Model {

      var $table = "usuarios";  
      var $select_column = array("id_usuario", "nombre", "apellido_p", "apellido_m","telefono","email","username"); 
      var $order_column = array("id_usuario", "nombre", "apellido_p", "apellido_m","telefono","email","username"); 

 



      function make_query()  
      {  
           $this->db->select("*"); 
           $this->db->from("usuarios"); 
          $this->db->where("rol_id",2);

 
            $this->db->group_start();

           if(isset($_POST["search"]["value"]))  
           {  

            
           $this->db->or_like("nombre", $_POST["search"]["value"]);  
           $this->db->or_like("apellido_p", $_POST["search"]["value"]);  
           $this->db->or_like("apellido_m", $_POST["search"]["value"]);  
           $this->db->or_like("telefono", $_POST["search"]["value"]);  
           $this->db->or_like("email", $_POST["search"]["value"]);  
           $this->db->or_like("username", $_POST["search"]["value"]);  

         
  
           }  
           if(isset($_POST["order"]))  
           {  
                $this->db->order_by($this->order_column[$_POST['order']['0']['column']], $_POST['order']['0']['dir']);  
           }  
           else  
           {  
                $this->db->order_by('id_usuario', 'DESC');  
           } 
                     $this->db->group_end();


      }  
      function make_datatables(){  
           $this->make_query();  
           if($_POST["length"] != -1)  
           {  
                $this->db->limit($_POST['length'], $_POST['start']);  
           }  
           $query = $this->db->get();  
           return $query->result();  
      }  
      function get_filtered_data(){  
           $this->make_query();  
           $query = $this->db->get();  
           return $query->num_rows();  
      }       
      function get_all_data()  
      {  
           $this->db->select("*");  
           $this->db->from($this->table);  
           return $this->db->count_all_results();  
      }  
      function insert_crud($data)  
      {  
           $this->db->insert('usuarios', $data); 
      }  
      function buscarcliente($id_usuario)  
      {  
           $this->db->where("id_usuario", $id_usuario);  
           $query=$this->db->get('usuarios');  
           return $query->result();  
      }  


function validarusuario($username)  
      {  
           $this->db->where('username', $username);  
           $query = $this->db->get("usuarios");  
           if($query->num_rows() > 0)  
           {  
                return true;  
           }  
           else  
           {  
                return false;  
           }  
      }  
function validaremail($email)  
      {  
           $this->db->where('email', $email);  
           $query = $this->db->get("usuarios");  
           if($query->num_rows() > 0)  
           {  
                return true;  
           }  
           else  
           {  
                return false;  
           }  
      }  








      function actualizarcliente($id_usuario, $data)  
      {  
           $this->db->where("id_usuario", $id_usuario);  
           $this->db->update("usuarios", $data); 

      }  

      public function buscarregistro($user_id){
        $this->db->from('productos');
        $this->db->where('id', $user_id);
        $result = $this->db->get('');
        if($result->num_rows() > 0){
          return  $result->row();
        }

      }



      function delete_single_user($id_usuario)  
      {  
           $this->db->where("id_usuario", $id_usuario);  
           $this->db->delete("usuarios"); 
           //DELETE FROM Productos WHERE id = '$user_id'  
      } 


// OBTENER TIPO DE PRODUCTO Y SECCIONES DE ADMIN
        function obtenermed_tipo()
  {
    $this->db->select('*');
    $query = $this->db->get('tipoproductos');
    return $query->result();
  } 

      function obtener_secciones()
    {
      $this->db->select('*');
      $query = $this->db->get('seccionmuestra');
      return $query->result();

    }
    // FIN DE LA OBTENCION DE TIPO DE PRODUCTO Y SECCIONES


    // OBTENER LA PRIMER SECCION PARA PAG PRINCIPAL


    public function obtenerseccionone(){

      $this->db->select('*');
      $this->db->where('id_seccionmuestra', 2);
      $query = $this->db->get('productos');
      return $query->result();
    }
}
