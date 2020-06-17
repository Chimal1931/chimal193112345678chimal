<style type="text/css">
  a{
    cursor: pointer;
  }
</style>

<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap.min.js"></script>
<!-- <script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script> -->
<script src="https://cdn.datatables.net/buttons/1.6.1/js/dataTables.buttons.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.6.1/js/buttons.flash.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
<script src="https://cdn.datatables.net/buttons/1.6.1/js/buttons.html5.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.6.1/js/buttons.print.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/jszip-2.5.0/dt-1.10.21/b-1.6.2/b-colvis-1.6.2/b-flash-1.6.2/b-html5-1.6.2/b-print-1.6.2/datatables.min.css"/>
 
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/v/dt/jszip-2.5.0/dt-1.10.21/b-1.6.2/b-colvis-1.6.2/b-flash-1.6.2/b-html5-1.6.2/b-print-1.6.2/datatables.min.js"></script>
   <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-warning card-header-icon">

                  <div class="card-icon">
                    <i  class="material-icons">content_copy</i>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="stats">
                   <i class="material-icons">date_range</i> <a class="update" id="1" title="EDITAR MENU" > EDITAR MENU MARTA</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-success card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">store</i>
                  </div>
                  <p class="card-category">Revenue</p>
                  <h3 class="card-title">$34,245</h3>
                </div>
                <div class="card-footer">
                  <div class="stats">
                   <i class="material-icons">date_range</i> <a class="updatebanner" id="1" title="EDITAR MENU" >BANNER CON TEXTO</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-danger card-header-icon">
                  <div class="card-icon">
                    <i class="material-icons">info_outline</i>
                  </div>
                  <p class="card-category">Fixed Issues</p>
                  <h3 class="card-title">75</h3>
                </div>
                <div class="card-footer">
                  <div class="stats">
                    <i class="material-icons">local_offer</i> Tracked from Github
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-info card-header-icon">
                  <div class="card-icon">
                    <i class="fa fa-twitter"></i>
                  </div>
                  <p class="card-category">Followers</p>
                  <h3 class="card-title">+245</h3>
                </div>
                <div class="card-footer">
                  <div class="stats">
                    <i class="material-icons">update</i> Just Updated
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <!-- EDITAR MENU -->
<div id="userModal" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content my-2 my-sm-0">
      <form method="post" id="user_form">  
                <div class="modal-content my-2 my-sm-0">  
                     <div class="modal-header padding">  
                          <button type="button" class="close" data-dismiss="modal">&times;</button> 
                     </div>  
                       <h1 class=" text-center modal-title">AGREGAR</h1>  
                     <div class="modal-body">  
                       <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="">NOMBRE DE EMPRESA </label>
                          <input type="text" name="nombre_negocio" id="nombre_negocio" class="form-control" >
                        </div>
                      </div>
                        <div class="col-md-6">
                        <div class="form-group">
                          <label class="">TITULO UNO </label>
                          <input type="text" name="t1" id="t1" class="form-control" >
                        </div>
                      </div>
                        <div class="col-md-6">
                        <div class="form-group">
                          <label class="">TITULO DOS </label>
                          <input type="text" name="t2" id="t2" class="form-control" >
                        </div>
                      </div>
                        <div class="col-md-6">
                        <div class="form-group">
                          <label class="">TITULO TRES </label>
                          <input type="text" name="t3" id="t3" class="form-control" >
                        </div>
                      </div>
                        <div class="col-md-6">
                        <div class="form-group">
                          <label class="">TITULO CUATRO </label>
                          <input type="text" name="t4" id="t4" class="form-control" >
                        </div>
                      </div>
                        <div class="col-md-6">
                        <div class="form-group">
                          <label class="">TITULO CINCO </label>
                          <input type="text" name="t5" id="t5" class="form-control" >
                        </div>
                      </div>
                      <div></div>
                       <div class="col-md-12 text-center">
                        <div class="form-group">
                          <label class="">COLOR DEL MENU </label>
                          <input type="color" name="color_nav" id="color_nav" class="form-control" >
                        </div>
                      </div>
                       <label>SELECCIONAR IMAGEN DE LOGO</label>  
                          <input type="file" name="user_image" id="user_image" />  
                          <span id="user_uploaded_image"></span>
                    </div>
                     </div>  
                     <div class="modal-footer">  
                          <input type="hidden" name="id_nav" id="id_nav" />  
                         <input type="hidden" name="action" id="action" class="btn btn-success" value="Add" />  

                          <input type="submit" name="action" id="action" class="btn btn-success" style="background: #D953FA; border-color: #D953FA;" value="GUARDAR" />  
                          <button type="button" class="btn btn-default" data-dismiss="modal" style="background: #D953FA; border-color: #D953FA;">CERRAR</button>  
                     </div>  
                </div>  
          </form>      
      </div>
  </div>
</div>






 <script type="text/javascript" language="javascript" >
$('#add_button').click(function(){  
           $('#user_form')[0].reset();  
            $('#unir').hide();

           $('.modal-title').text("AGREGAR PRODUCTO");  
           $('#action').val("Add");  
           $('#user_uploaded_image').html('');  
      });
  $(document).ready(function(){  
      $(document).on('submit', '#user_form', function(event){  
           event.preventDefault();  

           var nombre_negocio = $('#nombre_negocio').val();  
           var t1 = $('#t1').val();  
           var t2 = $('#t2').val();  
           var t3 = $('#t3').val();  
           var t4 = $('#t4').val(); 
           var t5 = $('#t5').val(); 
           var color_nav = $('#color_nav').val(); 
           var extension = $('#user_image').val().split('.').pop().toLowerCase();  
           if(extension != '')  
           {  
                if(jQuery.inArray(extension, ['gif','png','jpg','jpeg']) == -1)  
                {  
                     alert("Invalid Image File");  
                     $('#user_image').val('');  
                     return false;  
                }  
           }       
           if(nombre_negocio != '' && t5 != '')  
           {  
                $.ajax({  
                     url:"<?php echo base_url() . 'Cambio_inicio/cambio_nav'?>",  
                     method:'POST',  
                     data:new FormData(this),  
                     contentType:false,  
                     processData:false,  
                     success:function(data)  
                     {  
                            swal({
                              position: 'top-end',
                              icon: 'success',
                              title: 'INFORMACIÓN GUARDADA CORRECTAMENTE',
                              showConfirmButton: false,
                              timer: 1500
                            })
                          $('#user_form')[0].reset();  
                          $('#userModal').modal('hide');  
                          dataTable.ajax.reload();  
                     }  
                });  
           }  
           else  
           {  
                            Swal.fire(
                              'OLVIDASTE ALGUN DATO',
                              'REVISAR INFORMACIÓN',
                              'question'
                            );           }  
                  });  
      $(document).on('click', '.update', function(){  
           var id_nav = $(this).attr("id");  
           $.ajax({  
                url:"<?php echo base_url(); ?>Cambio_inicio/fetch_single_user",  
                method:"POST",  
                data:{id_nav:id_nav},  
                dataType:"json",  
                success:function(data)  
                {  

                     $('#userModal').modal('show');  
                     $('#nombre_negocio').val(data.nombre_negocio); 
                     $('#t1').val(data.t1); 
                     $('#t2').val(data.t2); 
                     $('#t3').val(data.t3); 
                     $('#t4').val(data.t4); 
                     $('#t5').val(data.t5); 
                     $('#color_nav').val(data.color_nav);

                     
                     $('.modal-title').text("EDITAR MENU");  
                     $('#id_nav').val(id_nav);  
                     $('#user_uploaded_image').html(data.user_image);  
                     $('#action').val("Edit");  
                }  
           })  
      }); 
 });  
 </script>  

