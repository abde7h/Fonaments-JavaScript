function programa() {
  let nota1 = prompt("Introdueix la primera nota");
  let nota2 = prompt("Introdueix la segona nota");
  let nota3 = prompt("Introdueix la tercera nota");

  let resultado;
  resultado =
    (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3;

  document.getElementById("dades").innerHTML =
    "La mitjana de les notes es :" + resultado;
}
