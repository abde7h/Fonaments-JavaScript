// Demanem les dades a l'usuari
let nom = prompt("Introdueix el teu nom:");
let cognom = prompt("Introdueix el teu cognom:");
let edat = prompt("Introdueix la teva edat:");

// Mostrem les dades per consola
/*console.log("Nom: " + nom);
console.log("Cognom: " + cognom);
console.log("Edat: " + edat);*/

// Mostrem les dades amb un popup
//alert("Nom: " + nom + "\nCognom: " + cognom + "\nEdat: " + edat);

// Mostrem les dades amb getElementById
document.getElementById("dades").innerHTML =
  "Nom: " + nom + "<br>Cognom: " + cognom + "<br>Edat: " + edat;
