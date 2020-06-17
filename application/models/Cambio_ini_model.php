<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cambio_ini_model extends CI_Model {



  public function obtenerid(){
    $this->db->select('*');
    $query = $this->db->get('nav_artesa');
    return $query->result();
  }

  function fetch_single_user($id_nav)  
      {  
           $this->db->where("id_nav", $id_nav);  
           $query=$this->db->get('nav_artesa');  
           return $query->result();  
      } 

      function update_crud($id_nav, $data)  
      {  
           $this->db->where("id_nav", $id_nav);  
           $this->db->update("nav_artesa", $data); 
      }  


      public function buscarregistro($id_nav){
        $this->db->from('nav_artesa');
        $this->db->where('id_nav', $id_nav);
        $result = $this->db->get('');
        if($result->num_rows() > 0){
          return  $result->row();
        }

      }

      public function obtdatenav(){
        $this->db->select('*');
        $query = $this->db->get('nav_artesa');
        return $query->result();
      }

}
