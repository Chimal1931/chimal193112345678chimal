<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <link rel="apple-touch-icon" sizes="76x76" href="assets/assets/img/apple-icon.png">
  <link rel="icon" type="image/png" href="assets/assets/img/favicon.png">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <title>
    <?= $title ?>
  </title>
  <meta content='width=device-width, initial-scale=1.0, shrink-to-fit=no' name='viewport' />
  <!--     Fonts and icons     -->
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css">
  <!-- CSS Files -->
  <link href="assets/assets/css/material-dashboard.css?v=2.1.2" rel="stylesheet" />
  <!-- CSS Just for demo purpose, don't include it in your project -->
  <link href="assets/assets/demo/demo.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="estilos/principal/menu.css">

</head>

<body class="">
  <div class="wrapper">
    <div class="sidebar" data-color="purple" data-background-color="white"  style="background-color: #111111;">
      <!--
      Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"

      Tip 2: you can also add an image using data-image tag
  -->
      <div class="logo">
        <a href="" class="simple-text  text-center"><span class="firstnamefactory"> ARTESANIAS</span> <span class="namefactory"> MEXICANAS</span></a>
      </div>
      <div class="sidebar-wrapper">
        <ul class="nav">
          <li class="nav-item active dropdown  ">
            <a class="nav-link" href="#">
              <i class="material-icons">dashboard</i>
              <p>INICIO</p>                

            </a>

          </li>
           <li class="nav-item active dropdown  ">
            <a class="nav-link" href="<?= base_url() ?>Productos">
              <i class="material-icons">assignment_ind</i>
              <p>PRODUCTOS</p>                

            </a>

          </li>
          <li class="nav-item active dropdown  ">
            <a class="nav-link" href="<?= base_url() ?>CLIENTES">
  <i class="material-icons">
    assignment_ind
  </i>              <p>CLIENTES</p>                
            </a>

          </li>
           <li class="nav-item active dropdown  ">
            <a class="nav-link dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="<?= base_url() ?>CLIENTES">
              <i class="material-icons">              system_update_alt
</i>

              <p>CAMBIO DE PAGINA</p>                
            </a>
            </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">

                  <a class="dropdown-item btn btn-sm btn-primary" style="background: #D953FA; border-color: #D953FA; color: #ffffff" href="#">INICIO</a>
                   <a class="dropdown-item btn btn-sm btn-primary" style="background: #D953FA; border-color: #D953FA; color: #ffffff" href="#">CONOCENOS</a>
                   <a class="dropdown-item btn btn-sm btn-primary" style="background: #D953FA; border-color: #D953FA; color: #ffffff" href="#">HISTORIA</a>
                   <a class="dropdown-item btn btn-sm btn-primary" style="background: #D953FA; border-color: #D953FA; color: #ffffff" href="#">GALERIA</a>
                </div>

          </li>
             <li class="nav-item active dropdown  ">
            <a class="nav-link dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="<?= base_url() ?>CLIENTES">
<i class="material-icons">
library_add_check
</i>              <p>CAMBIO DE CATALOGOS</p>                
            </a>
            </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item btn btn-sm btn-primary" style="background: #D953FA; border-color: #D953FA; color: #ffffff" href="#">COLLARES</a>
                   <a class="dropdown-item btn btn-sm btn-primary" style="background: #D953FA; border-color: #D953FA; color: #ffffff" href="#">PULCERAS</a>
                   <a class="dropdown-item btn btn-sm btn-primary" style="background: #D953FA; border-color: #D953FA; color: #ffffff" href="#">BLUSAS</a>
                   <a class="dropdown-item btn btn-sm btn-primary" style="background: #D953FA; border-color: #D953FA; color: #ffffff" href="#">ARTICULOS</a>
                </div>

          </li>
          <!-- your sidebar here -->
        </ul>
      </div>
    </div>
    <div class="main-panel">
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
        <div class="container-fluid">
          <div class="navbar-wrapper">
            <a class="navbar-brand" href="javascript:;">PANEL DE ADMINISTRACIÓN</a>
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span class="sr-only">Toggle navigation</span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="javascript:;">
                  <i class="material-icons">dashboard</i>
                  <p class="d-lg-none d-md-block">
                    Stats
                  </p>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="material-icons">notifications</i>
                  <span class="notification">5</span>
                  <p class="d-lg-none d-md-block">
                    Some Actions
                  </p>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="#">Mike John responded to your email</a>
                  <a class="dropdown-item" href="#">You have 5 new tasks</a>
                  <a class="dropdown-item" href="#">You're now friend with Andrew</a>
                  <a class="dropdown-item" href="#">Another Notification</a>
                  <a class="dropdown-item" href="#">Another One</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="javascript:;" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ADMINISTRADOR: <?= $this->session->userdata('nombre');?>
                  <i class="material-icons">person</i>
                  <p class="d-lg-none d-md-block">
                    Account
                  </p>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="<?= base_url() ?>Auth/logout">CERRAR SESION</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>








      <!-- End Navbar -->
      <div class="content">
        <div class="container-fluid">
          <!-- your content here -->
        
      