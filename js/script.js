 const body = document.body
 const btnRelaxMode = document.getElementById("btn-relax-mode")
 btnRelaxMode.addEventListener("click", toggleRelaxMode)
 function toggleRelaxMode(){
 body.classList.toggle("relax-mode")}


 const productos = [
{nombre: "HYALU B5 SERUM",
contenido: "150ml",
beneficios: "Mejora el proceso de reparación de la piel.", 
tipoDePielRecomendada: "sensible",
imagen: ".img/pleasing.jpeg"},

{nombre: "HYALU B5 OJOS",
contenido: "200ml",
beneficios: "Repara y rellena la barrera de la piel del contorno de ojos.", 
tipoDePielRecomendada: "grasa",
imagen: "./imgs/pleasing.png"},

{nombre: "HYALU B5 CREMA",
contenido: "250ml",
beneficios: "Reduce las arrugas. Rellena la piel aportando volumen y elasticidad.", 
tipoDePielRecomendada: "seca",
imagen: "./imgs/pleasing.png"}];

const contenedor = document.getElementById("contenedorProductos");

productos.forEach((producto) => {
let contenedorProd = document.createElement("div")
contenedorProd.innerHTML = `<center><div class="card mb-3" style="max-width: 600px;">
<div class="row g-0">
  <div class="col-md-4">
  <img src="${productos.imagen}"></img>
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text" style="text-align: left">Contenido: ${producto.contenido}.</p>
      <p class="card-text" style="text-align: left">Beneficios: ${producto.beneficios}</p>
      <p class="card-text" style="text-align: left">Se recomienda su uso en tipos de piel ${producto.tipoDePielRecomendada}.</p>
    </div>
  </div>
</div>
</div></center>`

contenedor.appendChild(contenedorProd)
});







    

