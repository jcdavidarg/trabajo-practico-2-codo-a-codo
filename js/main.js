const precioTicket = 200;

const resumen = document.getElementById("resumen");

const compraTotal = document.getElementById("compraTotal");

const borrar = document.getElementById("borrar");

function resetear(event) {
  compraTotal.innerHTML = `Total a pagar: $`;
}

function calcular(event) {
  event.preventDefault();

  let cantidad = document.getElementById("cantidad").value;
  let descuento = document.getElementById("categoria").value;

  let totalPagar =
    cantidad * precioTicket - (cantidad * precioTicket * descuento) / 100;

  compraTotal.innerHTML = `Total a pagar: $${totalPagar}`;
}

resumen.addEventListener("click", calcular);

borrar.addEventListener("click", resetear);
