<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Productos_model extends CI_Model {

      var $table = "Productos";  
      var $select_column = array("id", "nombre", "modelo", "descripcion", "color", "precio","stock_actual", "image"); 
 
      var $order_column = array(null, "nombre", "precio", null, null);  


      function make_query()  
      {  
           $this->db->select($this->select_column);  
           $this->db->from($this->table);  
           
           if(isset($_POST["search"]["value"]))  
           {  
              $this->db->like("nombre", $_POST["search"]["value"]);  
              $this->db->or_like("modelo", $_POST["search"]["value"]);  
              $this->db->or_like("descripcion", $_POST["search"]["value"]);  
              $this->db->or_like("color", $_POST["search"]["value"]);  
              $this->db->or_like("precio", $_POST["search"]["value"]); 
              
                            $this->db->or_like("stock_actual", $_POST["search"]["value"]); 

 
           }  
           if(isset($_POST["order"]))  
           {  
                $this->db->order_by($this->order_column[$_POST['order']['0']['column']], $_POST['order']['0']['dir']);  
           }  
           else  
           {  
                $this->db->order_by('id', 'DESC');  
           }  
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
           $this->db->insert('Productos', $data);  
      }  
      function insert_crude($data)  
      {  
           $this->db->insert('entrante', $data);  
      }  
     


      function fetch_single_user($user_id)  
      {  
           $this->db->where("id", $user_id);  
           $query=$this->db->get('Productos');  
           return $query->result();  
      }  
      function update_crud($user_id, $data)  
      {  
           $this->db->where("id", $user_id);  
           $this->db->update("Productos", $data);  
      }  

      public function buscarregistro($user_id){
        $this->db->from('productos');
        $this->db->where('id', $user_id);
        $result = $this->db->get('');
        if($result->num_rows() > 0){
          return  $result->row();
        }

      }



      function delete_single_user($user_id)  
      {  
           $this->db->where("id", $user_id);  
           $this->db->delete("Productos"); 
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
