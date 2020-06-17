<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">

<?php foreach($obtener_menu as $data): ?>
<nav class="navbar navbar-expand-lg" style="background-color: <?= $data->color_nav ?>">
  <div class="container">
    <a class="navbar-bran" href=""><img src="<?= base_url() ?>images/<?= $data->image ?>" class="logo-brand" alt="logo" >
  <a class="navbar-brand firstnamefactory " href="#"><?=$data->nombre_negocio ?></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<ion-icon name="menu"></ion-icon>  </button>
	 <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
         <a class="nav-link cent" href="#"><?= $data->t1 ?></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><?= $data->t2 ?></a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<?= $data->t3 ?>        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">COLLARES</a>
          <a class="dropdown-item" href="#">PULCERAS</a>
          <a class="dropdown-item" href="#">BLUSAS</a>
          <a class="dropdown-item" href="#">ARTICULOS</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><?= $data->t4 ?></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><?= $data->t5 ?></a>
      </li>
    </ul>
  </div>
</div>
</nav>

<?php endforeach; ?>

<section id="hero">
<div class="containter">
  <div class="content-center">
  <h1 class="textd" style="border: 3px solid #D351F9; color: #FFFFFF;" >LO MEJOR DE LA ARTESANÍA MEXICANA</h1>
  <a href="#" class="btn btn-light topmargin-sm" style="background-color: #ED51FF; color: #FFFFFF; border-color: #ED51FF; ">EXPLORA NUESTROS PRODCUTOS</a>
</div>
</div>
</section>





 <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
 
  </body>
</html>


