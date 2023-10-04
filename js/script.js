 const body = document.body
 const btnRelaxMode = document.getElementById("btn-relax-mode")
 btnRelaxMode.addEventListener("click", toggleRelaxMode)
 function toggleRelaxMode(){
 body.classList.toggle("relax-mode")}


 const productos = [
{nombre: "numero1",
contenido: "200ml",
beneficios: "seca", 
tipoDePielRecomendada: "seca",
imagen: ".img/pleasing.jpeg"},

{nombre: "numero2",
contenido: "200ml",
beneficios: "seca", 
tipoDePielRecomendada: "seca",
imagen: "./imgs/pleasing.png"},

{nombre: "numero3",
contenido: "200ml",
beneficios: "seca", 
tipoDePielRecomendada: "seca",
imagen: "./imgs/pleasing.png"}];

const contenedor = document.getElementById("contenedorProductos");

productos.forEach((producto) => {
let contenedorProd = document.createElement("div")
contenedorProd.innerHTML = `<center><div class="card mb-3" style="max-width: 600px;">
<div class="row g-0">
  <div class="col-md-4">
  <img src="${productos.imagen}" class="img-fluid rounded-start" alt="..."></img>
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text" style="text-transform: lowercase">Contenido: ${producto.contenido}.</p>
      <p class="card-text">Beneficios: ${producto.beneficios}</p>
      <p class="card-text">Se recomienda su uso en tipos de piel ${producto.tipoDePielRecomendada}.</p>
    </div>
  </div>
</div>
</div></center>`

contenedor.appendChild(contenedorProd)
});







    

