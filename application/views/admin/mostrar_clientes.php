

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


 <div class="container box">  
    <div class="table-responsive">  


<a class="btn btn-sm btn-primary" style="background: #D953FA; border-color: #D953FA;"  data-toggle="modal" data-target="#userModal" id="add_button" title="NUEVO" >NUEVO</a>

      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">CLIENTES</h4>
                  <p class="card-category">REPORTE DE CLIENTES AGREGADOS</p>
                </div>
                    <div class="card-body">
                  <div class="table-responsive">
                    <table id="user_data" class="table table-striped table-bordered" style="width:100%">
                        <thead class="text-primary">
            <tr>
                               <th width="40%">ID</th>  
                               <th width="40%">NOMBRE</th>  
                               <th width="35%">APELLIDO PATERNO</th>  
                               <th width="35%">APELLIDO MATERNO</th>  
                               <th width="35%">TELEFONO</th>  
                               <th width="35%">CORREO</th> 
                                <th width="35%">USUARIO</th>  
 
                               <th width="10%">EDITAR</th>  
                               <th width="10%">ELIMINAR</th>  
            </tr>
                        </thead>
                    <tbody>
                    </tbody>
                    </table>
                   </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>

<div id="userModal" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <form method="post" id="user_form">  
                <div class="modal-content">  
                     <div class="modal-header">  
                          <button type="button" class="close" data-dismiss="modal">&times;</button> 
                     </div>  
                       <h1 class=" text-center modal-title">AGREGAR CLIENTE</h1>  
                     <div class="modal-body">  
                       <div class="row">
                      <div class="col-md-5">
                        <div class="form-group">
                          <label class="">NOMBRE </label>
                          <input type="text" name="nombre" id="nombre" class="form-control" >
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="">APELLIDO PATERNO</label>
                          <input type="text" name="apellido_p" id="apellido_p" class="form-control">
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="">APELLIDO MATERNO</label>
                          <input type="text" name="apellido_m" id="apellido_m" class="form-control">
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="">TELEFONO</label>
                          <input type="number" name="telefono" id="telefono" class="form-control">
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="">EMAIL</label>
                          <input type="text" name="email" id="email" class="form-control">
                                                    <span id="user_resulte"></span>

                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="">USUARIO</label>
                          <input type="text" name="username" id="username" class="form-control">
                          <span id="user_result"></span>
                        </div>
                      </div>
                      <div id="adjunto">
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="">CONTRASEÑA</label>
                          <input type="text" name="password" id="password" class="form-control">
                        </div>
                      </div>
                    </div>
                    </div>
                     </div>  
                     <div class="modal-footer">  
                          <input type="hidden" name="id_usuario" id="id_usuario" />  
                         <input type="hidden" name="action" id="action" class="btn btn-success" value="Add" />  

                          <input type="submit" name="action" id="action" class="btn btn-success" style="background: #D953FA; border-color: #D953FA;" value="GUARDAR" />  
                          <button type="button" class="btn btn-default" data-dismiss="modal" style="background: #D953FA; border-color: #D953FA;">CERRAR</button>  
                     </div>  
                </div>  
          </form>      
      </div>
  </div>
</div>


<script>
 $(document).ready(function(){
      $('#username').on('blur',function(){  
           var username = $('#username').val();  
            var email = $('#email').val();  
            console.log("kdmkmd");

           if(username != '')  
           {  
                $.ajax({  
                     url:"<?php echo base_url(); ?>Clientes/validacionusu",  
                     method:"POST",  
                     data:{username:username},  
                     success:function(data){  
                          $('#user_result').html(data);  
                         $('#user_result').show();
                           

                     }  
                });  
           }  
      });  
 });  
 </script>
 <script>
 $(document).ready(function(){
      $('#email').on('blur',function(){  
           var email = $('#email').val();  

           if(email != '')  
           {  
                $.ajax({  
                     url:"<?php echo base_url(); ?>Clientes/validacionem",  
                     method:"POST",  
                     data:{email:email},  
                     success:function(data){  
                          $('#user_resulte').html(data);  
                         $('#user_resulte').show();    

                     }  
                });  
           }  
      });  
 });  
 </script>  

<script type="text/javascript">
      $('#add_button').click(function(){  
           $('#user_form')[0].reset();  
            $('#adjunto').show();

           $('.modal-title').text("AGREGAR CLIENTE");  
           $('#action').val("Add");  
           $('#user_uploaded_image').html('');  
      });
  
</script>
 <script type="text/javascript" language="javascript" >

 $(document).ready(function(){  
     
      var dataTable = $('#user_data').DataTable({  
        
        "dom": "Bfrtip",
        "buttons": [
             'excel', 'pdf'
        ],

           "processing":true,  
           "serverSide":true,  
           "order":[],  
           "ajax":{  
                url:"<?php echo base_url() . 'Clientes/fetch_user'; ?>",  
                type:"POST"  
           }, 
               "language":
    {
      "url": "https://cdn.datatables.net/plug-ins/1.10.19/i18n/Spanish.json"
    }, 
           "columnDefs":[  
                {  
                     "targets":[0, 3, 4],  
                     "orderable":false,  
                },  
           ],  
      });


$(document).on('submit', '#user_form', function(event){  
           event.preventDefault();  

           var nombre = $('#nombre').val();  
           var apellido_p = $('#apellido_p').val();  
           var apellido_m = $('#apellido_m').val();  
           var telefono = $('#telefono').val();  
           var email = $('#email').val(); 
           var username = $('#username').val(); 
           var password = $('#password').val(); 

           if(nombre != '' && username != '')  
           {  
                $.ajax
                ({  
                     url:"<?php echo base_url() . 'Clientes/accioncliente'?>",  
                     method:'POST',  
                     data:new FormData(this),  
                     contentType:false,  
                     processData:false,  
                     success:function(data)  
                     {  
                       var datas = $.parseJSON(data);
                                console.log(datas);
                                if(datas.valid == 1){
                                swal({
                                        title: "INFORMACION GUARDADA CORRECTAMENTE",
                                        text: datas.success,
                                        type: "success",
                                        allowEscapeKey: false,
                                        showCancelButton: true,
                                        confirmButtonColor: "#DD6B55",
                                        confirmButtonText: "AGREGAR OTRO",
                                        cancelButtonText: "LISTO",
                                        closeOnConfirm: true,
                                        closeOnCancel: true}); 
                                          $('#user_form')[0].reset();  
                                          $('#userModal').modal('hide');  
                                          $('#user_result').hide();  
                                          $('#user_resulte').hide(); 
                                          dataTable.ajax.reload(); 
                                  }else{
                                        Swal.fire(
                                            'OH NO, OCURRIO UN ERROR',
                                            'REVISAR INFORMACIÓN',
                                            'question'
                                            ); 
                                  }
                     }
                });  
           }  
           else  
           {  
                Swal.fire(
                  'OLVIDASTE ALGUN DATO',
                  'REVISAR INFORMACIÓN',
                  'question'
                    );           
           }  
      });



$(document).on('click', '.update', function(){  
           var id_usuario = $(this).attr("id");  
           $.ajax({  
                url:"<?php echo base_url(); ?>Clientes/buscarcliente",  
                method:"POST",  
                data:{id_usuario:id_usuario},  
                dataType:"json",  
                success:function(data)  
                
                {  
      $('#userModal').modal('show');  
      $('#nombre').val(data.nombre);
      $('#apellido_p').val(data.apellido_p);
      $('#apellido_m').val(data.apellido_m);
      $('#telefono').val(data.telefono);
      $('#email').val(data.email);
      $('#username').val(data.username);
      $('#adjunto').hide();
      $('.modal-title').text("EDITAR ");  
      $('#id_usuario').val(id_usuario);  
      $('#user_uploaded_image').html(data.user_image);  
      $('#action').val("Edit");  
                }  
           })  
      }); 

       

$(document).on('click', '.delete', function() {
  var id_usuario = $(this).attr("id");
  Swal.fire({
    title: '¿DESEAS ELIMINAR LA INFORMACIÓN?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#D953FA',
    cancelButtonColor: '#9010AF',
    confirmButtonText: 'SI'
  }).then(result => {
    if (result.value) {
      borrarProducto(id_usuario);
    }
  });
});


function borrarProducto(id_usuario) {
  $.ajax({
    url: "<?php echo base_url(); ?>Clientes/delete_single_user",
    method: "POST",
    data: {
      id_usuario: id_usuario
    },
    success: function(data) {
    Swal.fire(
      'ELIMINADO!',
      'DATO ELIMINADO CORRECTAMENTE.',
      'success'
    );      dataTable.ajax.reload();
    }
  });
}












 });  
 </script>  