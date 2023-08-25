function programa() {
  let numero = prompt("Introdueix un numero");

  let doble;
  let triple;

  doble = parseInt(numero) * 2;
  triple = parseInt(numero) * 3;

  document.getElementById("dades").innerHTML = "El doble es: \n" + doble;
  document.getElementById("dades1").innerHTML = "El triple es: \n" + triple;
}
