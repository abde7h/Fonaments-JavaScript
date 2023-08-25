let contador = 0;
function operar() {
  let edat = prompt("Quina es la teva edat?");
  let titol = confirm("Tens un titol universitari?");
  let atur = confirm("Ets a l'atur?");

  if ((edat >= 18 && titol == true) || atur == true) {
    document.getElementById("dades").innerHTML =
      "Felicitats la teva beca a estat acceptada";
  } else {
    document.getElementById("dades").innerHTML =
      "La teva beca a sigut denegada";
  }
}
