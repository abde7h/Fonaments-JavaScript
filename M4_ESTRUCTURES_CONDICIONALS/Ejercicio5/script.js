function programa() {
  let numero1 = prompt("Introdueix el primer nombre: ");
  let numero2 = prompt("Introdueix el segon nombre: ");
  let operador = prompt("Escull un operador: + - * / : ")
  
  let suma;
  let resta;
  let multiplicacio;
  let divisio;
  
  if (operador == "+") {
    suma = parseInt(numero1) + parseInt(numero2);

    document.getElementById("dades").innerHTML =
      "El resultat de la suma es: " + suma;
  }
  else if (operador == "-") {
    resta = parseInt(numero1) - parseInt(numero2);

    document.getElementById("dades").innerHTML =
      "El resultat de la resta es: " + resta;
  }
  else if (operador == "*") {
    multiplicacio = parseInt(numero1) * parseInt(numero2);

    document.getElementById("dades").innerHTML =
      "El resultat de la multiplicació es: " + multiplicacio;
  }  
  else {
    divisio = parseInt(numero1) / parseInt(numero2);

    document.getElementById("dades").innerHTML =
      "El resultat de la divisio es: " + divisio;
  }
}
