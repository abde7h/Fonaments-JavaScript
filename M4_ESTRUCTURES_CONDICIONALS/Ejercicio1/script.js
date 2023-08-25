// Demanem les dades a l'usuari
function programa()
{
  let nom = prompt("Introdueix el teu nom:");
  let cognom = prompt("Introdueix el teu cognom:");
  let edat = prompt("Introdueix la teva edat:");

  if (parseInt(edat )>= 18) {
    document.getElementById("dades").innerHTML =
    "Nom: " + nom + "<br>Cognom: " + cognom + "<br>Ets major d'Edat";
	}
	else {
    document.getElementById("dades").innerHTML =
    "Nom: " + nom + "<br>Cognom: " + cognom + "<br>Ets menor d'Edat";
  }
}