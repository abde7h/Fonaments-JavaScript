function operar() {
  let numero1 = prompt("Introdueix el primer nombre: ");
  let numero2 = prompt("Introdueix el segon nombre: ");

  let suma;
  let resta;
  let multiplicacio;
  let divisio;

  suma = parseInt(numero1) + parseInt(numero2);

  document.getElementById("suma").innerHTML =
    "El resultat de la suma es: " + suma;

  resta = parseInt(numero1) - parseInt(numero2);

  document.getElementById("resta").innerHTML =
    "El resultat de la resta es: " + resta;

  multiplicacio = parseInt(numero1) * parseInt(numero2);

  document.getElementById("multiplicacio").innerHTML =
    "El resultat de la multiplicació es: " + multiplicacio;

  divisio = parseInt(numero1) / parseInt(numero2);

  document.getElementById("divisio").innerHTML =
    "El resultat de la divisio es: " + divisio;
}
