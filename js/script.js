// declaracion de variables
let categories = [];
let products = [];
let params = new URLSearchParams(document.location.search);
let id = params.get("id");


// funcion inicial
(function () {
    init();
})();

function init() {
    crearHeader();
    crearFooter();
    getCategories();
    getProducts();
}


//funciones
function getCategories() {
    fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(res => {
            setCategories(res);
        }).then(() => {
            // console.log(categories)
        })
}

function setCategories(data) {
    if (data) {
        categories = data;
    }
}

function getProducts() {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(res => {
            setProducts(res);
        }).then(() => {
            // console.log(products)
            if (id != null) {
                contruirProductoDetalle();
            } else {
                contruirProductSection();
            }
        })
}

function setProducts(data) {
    if (data) {
        products = data;
    }
}


function contruirProductSection() {
    categories.forEach(c => {
        let section = document.createElement('div');
        section.classList.add('container')
        section.classList.add('my-5')

        let contenido = `
        <header class="mb-4">
            <h3>${c}</h3>
        </header>
        <div class="row" id="${c}"></div>
        `
        section.innerHTML = contenido;
        document.getElementById('products_section').append(section)
    });


    categories.forEach(c => {
        const productsTmp = products.filter(p => p.category == c);

        productsTmp.forEach(p => {
            const card = document.createElement('div');
            card.classList.add('col-lg-3')
            card.classList.add('col-md-6')
            card.classList.add('col-sm-6')
            card.classList.add('d-flex')

            const contenidoProducto = `
            <div class="card w-100 my-2 shadow-2-strong">
                <img src="${p.image}" class="card-img-top"
                    style="aspect-ratio: 1 / 1" />
                <div class="card-body d-flex flex-column">
                    <p class="card-title">${p.title}</p>
                    <b class="card-text">$${p.price}</b>
                    <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="producto-detalle.html?id=${p.id}" class="text-primary shadow-0 me-1">Ver producto</a>
                    <!-- <a href="producto-detalle.html?id=${p.id}" class="btn btn-light border px-2 pt-2 icon-hover"><i
                        class="fas fa-heart fa-lg text-secondary px-1"></i></a> -->
                    </div>
                </div>
            </div>
            `
            card.innerHTML = contenidoProducto;
            card.dataset.id = p.id
            document.getElementById(c).append(card)
        })
    })
}

function contruirProductoDetalle() {
    let product = products.filter(p => p.id == Number(id))[0];

    if (product != undefined) { 

        
        document.getElementById('product_image').setAttribute('src', product.image)
        document.getElementById('product_title').innerText = product.title;
        document.getElementById('product_price').innerText = `$${product.price}`;
        document.getElementById('product_description').innerText = product.description;
        
        construirProductosSimilares(product);
    } else {
        window.location.href = '/';
        init();
    }
}

function construirProductosSimilares(product) {

    if (product != undefined) {
        let section = document.createElement('div');
        section.classList.add('container')
        section.classList.add('my-5')

        let contenido = `
        <header class="mb-4">
            <h3>Productos similares</h3>
        </header>
        <div class="row" id="${product.category}"></div>
        `
        section.innerHTML = contenido;
        document.getElementById('productos_similares').append(section)


        const productsTmp = products.filter(p => p.category == product.category);

        productsTmp.forEach(p => {
            const card = document.createElement('div');
            card.classList.add('col-lg-3')
            card.classList.add('col-md-6')
            card.classList.add('col-sm-6')
            card.classList.add('d-flex')

            const contenidoProducto = `
            <div class="card w-100 my-2 shadow-2-strong">
                <img src="${p.image}" class="card-img-top"
                    style="aspect-ratio: 1 / 1" />
                <div class="card-body d-flex flex-column">
                    <p class="card-title">${p.title}</p>
                    <b class="card-text">$${p.price}</b>
                    <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="producto-detalle.html?id=${p.id}" class="text-primary shadow-0 me-1">Ver producto</a>
                    <!-- <a href="producto-detalle.html?id=${p.id}" class="btn btn-light border px-2 pt-2 icon-hover"><i
                        class="fas fa-heart fa-lg text-secondary px-1"></i></a> -->
                    </div>
                </div>
            </div>
            `
            card.innerHTML = contenidoProducto;
            card.dataset.id = p.id
            document.getElementById(product.category).append(card)
        })
    } else {
        window.location.href = '/';
        init();
    }

    // console.log(product)

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

            <!-- Center elements -->
            <div class="order-lg-last col-lg-5 col-sm-8 col-8">
            <div class="d-flex float-end">
                <a href="./iniciar-sesion.html"
                class="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center"> <i
                    class="fas fa-user-alt m-1 me-md-2"></i>
                <p class="d-none d-md-block mb-0">Log in</p>
                </a>


            </div>
            </div>
            <!-- Center elements -->

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

