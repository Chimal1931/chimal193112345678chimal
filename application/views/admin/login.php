
<!------ Include the above in your HEAD tag ---------->

<!DOCTYPE html>
<html>
<head>
  <title>LOGIN</title>
   <!--Made with love by Mutiullah Samim -->
   
  <!--Bootsrap 4 CDN-->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    
    <!--Fontawesome CDN-->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">

  <!--Custom styles-->
  <link rel="stylesheet" type="text/css" href="assets/admin/login.css">
</head>
<body>
<div class="container">

  <div class="d-flex justify-content-center h-100">
    <div class="card">
      <div class="card-header">
          
        <h3>INICIAR SESIÓN</h3>
      </div>

      <div class="card-body">
        <form action="<?php echo base_url(); ?>Auth/login"  method="POST">
          <?php if($this->session->flashdata("error")):?>
<div class="alert alert-danger">
  <p><?php echo $this->session->flashdata("error")?></p>
</div>
<?php endif; ?>
          <div class="input-group form-group">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fas fa-user"></i></span>
            </div>
            <input type="text"  class="form-control" name="username" placeholder="USUARIO">
            
          </div>
          <div class="input-group form-group">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fas fa-key"></i></span>
            </div>
            <input type="password"  class="form-control" name="password" placeholder="CONTRASEÑA">
          </div>
          
          <div class="form-group">
            <input type="submit" value="LOGIN" class="btn float-right login_btn">
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</body>
</html>