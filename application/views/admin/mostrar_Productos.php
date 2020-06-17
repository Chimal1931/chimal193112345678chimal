

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
                  <h4 class="card-title ">PRODUCTOS</h4>
                  <p class="card-category">REPORTE DE PRODUCTOS AGREGADOS</p>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                <table id="user_data" class="table table-striped table-bordered text-center" style="width:100%">
                    <thead class="text-primary">
                         <tr>
                               <th width="10%">IMAGEN</th>  
                               <th width="35%">NOMBRE</th>  
                               <th width="35%">MODELO</th>  
                               <th width="35%">DESCRIPCIÓN</th>  
                               <th width="35%">COLOR</th>  
                                        <th width="35%">PRECIO</th>  

                               <th width="35%">STOCK ACTUAL</th>  
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
                       <h1 class=" text-center modal-title">AGREGAR PRODUCTO</h1>  
                     <div class="modal-body">  
                       <div class="row">
                      <div class="col-md-5">
                        <div class="form-group">
                          <label class="">NOMBRE DEL PRODUCTO</label>
                          <input type="text" name="nombre" id="nombre" class="form-control" >
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="">MODELO</label>
                          <input type="text" name="modelo" id="modelo" class="form-control">
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="">COLOR</label>
                          <input type="text" name="color" id="color" class="form-control">
                        </div>
                      </div>

                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="">PRECIO</label>
                          <input type="number" name="precio" id="precio" class="form-control">
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="">DESCRIPCIÓN</label>
                          <input type="textarea" name="descripcion" id="descripcion" class="form-control">
                        </div>
                      </div>
                      
                      <div class="col-md-4">
                        <div class="form-group">
                                    <select class="form-control" name="id_tipoproducto" id="id_tipoproducto">
                                  <option value="" selected>SELECCIONA EL TIPO DE PRODUCTO</option>
                                  <?php foreach($lore as $value): ?>
                                    <option value="<?= $value->id_tipoproducto ?>"><?= $value->tipodescripcion ?></option>
                                  <?php endforeach; ?>
                         </select>                        </div>
                      </div>
                     <div class="col-md-4">
                        <div class="form-group">
                          <select class="form-control" id="id_seccionmuestra" name="id_seccionmuestra">
                            <option value="">SELECCIONAR SECCIÓN</option>
                            <?php foreach($seccionmuestra as $seccion): ?>
                              <option value="<?= $seccion->id_seccionmuestra ?>"><?= $seccion->nombreseccion ?></option>
                            <?php endforeach; ?>
                          </select> 
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="">STOCK ACTUAL</label>
                          <input type="textarea" name="stock_actual" id="stock_actual" class="form-control">
                        </div>
                      </div>

                   
                        <div class="col-md-4" id="unir">
                        <div class="form-group">
                          <label class="">STOCK ENTRANTE</label>
                          <input type="textarea" name="stock_entrante" id="stock_entrante" class="form-control">
                        </div>
                      </div>
                    



                    </div>
                      

                          
                          <label>SELECCIONAR IMAGEN</label>  
                          <input type="file" name="user_image" id="user_image" />  
                          <span id="user_uploaded_image"></span>  
                     </div>

                     <div class="modal-footer">  
                          <input type="hidden" name="user_id" id="user_id" />  
                         <input type="hidden" name="action" id="action" class="btn btn-success" value="Add" />  

                          <input type="submit" name="action" id="action" class="btn btn-success" style="background: #D953FA; border-color: #D953FA;" value="GUARDAR" />  
                          <button type="button" class="btn btn-default" data-dismiss="modal" style="background: #D953FA; border-color: #D953FA;">CERRAR</button>  
                     </div>  
                </div>  
           </form>      </div>
  </div>
</div>
<script type="text/javascript">
      $('#add_button').click(function(){  
           $('#user_form')[0].reset();  
            $('#unir').hide();

           $('.modal-title').text("AGREGAR PRODUCTO");  
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
                url:"<?php echo base_url() . 'Productos/fetch_user'; ?>",  
                type:"POST"  
           }, 
               "language":
    {
      "url": "https://cdn.datatables.net/plug-ins/1.10.19/i18n/Spanish.json"
    }, 
  "columnDefs": [
        {
            "targets": [ 0, 3, 4 ],
            "orderable": false,
        },
        {
            "targets": [ 0,1,2,3,4,5,6,7,8],
            createdCell: function (cell, cellData, rowData, rowIndex, colIndex) {
                if (rowData[6] <= 10) {
                    $(cell).css('background-color', '#D953FA');
                }
            },
        }
    ],
         

      });  

      $(document).on('submit', '#user_form', function(event){  
           event.preventDefault();  

           var modelo = $('#modelo').val();  
           var descripcion = $('#descripcion').val();  
           var color = $('#color').val();  
           var precio = $('#precio').val();  
           var id_tipoproducto = $('#id_tipoproducto').val(); 
           var id_seccionmuestra = $('#id_seccionmuestra').val(); 
                      var stock_actual = $('#stock_actual').val(); 

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
           if(nombre != '' && precio != '')  
           {  
                $.ajax({  
                     url:"<?php echo base_url() . 'Productos/user_action'?>",  
                     method:'POST',  
                     data:new FormData(this),  
                     contentType:false,  
                     processData:false,  
                     success:function(data)  
                     {  


    swal({
      position: 'top-end',
      icon: 'success',
      title: 'PRODUCTO AGREGADOR CORRECTAMENTE',
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
           var user_id = $(this).attr("id");  
           $.ajax({  
                url:"<?php echo base_url(); ?>Productos/fetch_single_user",  
                method:"POST",  
                data:{user_id:user_id},  
                dataType:"json",  
                success:function(data)  
                {  

                     $('#userModal').modal('show');  
            $('#unir').show();

                     $('#nombre').val(data.nombre); 
                     $('#modelo').val(data.modelo); 
                     $('#descripcion').val(data.descripcion); 
                     $('#color').val(data.color); 
                     $('#stock_actual').val(data.stock_actual); 
                     $('#stock_entrante').val(data.stock_entrante); 
                     $('#precio').val(data.precio); 
                     $('#id_tipoproducto').val(data.id_tipoproducto); 
                     $('#id_seccionmuestra').val(data.id_seccionmuestra);
                     $('.modal-title').text("EDITAR PRODUCTO");  
                     $('#user_id').val(user_id);  
                     $('#user_uploaded_image').html(data.user_image);  
                     $('#action').val("Edit");  
                }  
           })  
      }); 

       

$(document).on('click', '.delete', function() {
  var user_id = $(this).attr("id");
  Swal.fire({
    title: '¿DESEAS ELIMINAR LA INFORMACIÓN?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#D953FA',
    cancelButtonColor: '#9010AF',
    confirmButtonText: 'SI'
  }).then(result => {
    if (result.value) {
      borrarProducto(user_id);
    }
  });
});


function borrarProducto(user_id) {
  $.ajax({
    url: "<?php echo base_url(); ?>Productos/delete_single_user",
    method: "POST",
    data: {
      user_id: user_id
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