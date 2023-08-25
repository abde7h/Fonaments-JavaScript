function operar() {
  let edat = prompt("Introdueix la teva edat: ");

  if (edat <= 5) {
    document.getElementById("dades").innerHTML = "El teu curs es preescolar";
  } else if (edat >= 6 && edat <= 11) {
    document.getElementById("dades").innerHTML = "El teu curs es primària";
  } else if (edat >= 12 && edat <= 15) {
    document.getElementById("dades").innerHTML = "El teu curs es la ESO";
  } else if (edat >= 16 && edat <= 17) {
    document.getElementById("dades").innerHTML = "El teu curs es Batxillerat";
  } else {
    document.getElementById("dades").innerHTML =
      "El teu curs es FP o Univesitat";
  }
  document.getElementById("dades").innerHTML = "El teucurs es: " + resultado;
}
