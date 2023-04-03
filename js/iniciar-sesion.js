(function () {
  init();
})();

function init() {
  crearHeader();
  crearFooter();
}

//
function crearHeader() {
  const contenido = `
  <div class="p-3 text-center bg-white border-bottom">
      <div class="container">
      <div class="row gy-3">
          <!-- Left elements -->
          <div class="col-lg-2 col-sm-4 col-4">
          <!-- <a href="https://mdbootstrap.com/" target="_blank" class="float-start">
              <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="35" />
          </a> -->
          <a href="/" class="float-start">
             E-Commerce
          </a> 
          </div>
          <!-- Left elements -->

          <!-- Right elements -->
          <div class="col-lg-5 col-md-12 col-12">
          <div class="input-group float-center">
              <div class="form-outline">
              <input type="search" id="form1" class="form-control" />
              <label class="form-label" for="form1">¿Que deseas buscar? </label>
              </div>
              <button type="button" class="btn btn-primary shadow-0">
              <i class="fas fa-search"></i>
              </button>
          </div>
          </div>
          <!-- Right elements -->
      </div>
      </div>
  </div>

  `
  document.getElementById('header').innerHTML = contenido
}

function crearFooter() {
  const contenido = `
  <!-- Section: Links  -->
  <section class="" style="background-color: #eaf2fd;">
    <div class="container text-center text-md-start pt-4 pb-4">
      <!-- Grid row -->
      <div class="row mt-3">
        <!-- Grid column -->
        <div class="col-12 col-lg-3 col-sm-12 mb-2">
          <!-- Content -->
          <a href="/" class="float-start">
              E-Commerce
          </a>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-12 col-lg-3 col-sm-4 ">
          <ul class="list-unstyled mb-4">
            <li><a class="text-muted" href="#">Quienes somos</a></li>
            <li><a class="text-muted" href="#">Politica de privacidad</a></li>
            <li><a class="text-muted" href="#">Programa de fidelidad</a></li>
            <li><a class="text-muted" href="#">Nuestras Tiendas</a></li>
            <li><a class="text-muted" href="#">Quiero ser franquiciado</a></li>
            <li><a class="text-muted" href="#">Anúncie aqui</a></li>
          </ul>
        </div>
        <!-- Grid column -->
        <!-- Grid column -->
        <div class="col-12 col-lg-6 col-sm-12">
          <!-- Links -->
          <h6 class="text-dark fw-bold mb-2">Hable con nosotros</h6>
          <div class="input-group mb-3">
            <input type="name" class="form-control border" placeholder="Nombre" aria-label="name" />
          </div>
          <div class="input-group mb-3">
            <textarea class="form-control border" name="mensaje" id="mensaje" placeholder="Escribe tu mensaje"
              rows="10"></textarea>
          </div>
          <button class="btn btn-sm btn-primary">Enviar mensaje</button>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
  </section>
  <!-- Section: Links  -->

  <div class="mt-4 mb-2" style="background-color: #ffffff;">
    <div class="container text-center">
      <p>Desarollado por Ivan Avila</p>
      <p>2023</p>
    </div>
  </div>`
  document.getElementById('footer').innerHTML = contenido
}

