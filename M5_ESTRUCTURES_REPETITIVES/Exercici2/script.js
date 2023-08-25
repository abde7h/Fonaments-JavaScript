function programa() {
  let numero1 = parseInt(prompt("Escriue el primer numero: "));
  let numero2 = parseInt(prompt("Escriue el primer numero: "));

  let suma = 0;

  /*for (let i = numero1; i <= numero2; i++){
    suma = suma + i;
  }*/

  let i = numero1;
  while (i <= numero2) {
    suma = suma + i;
    i++;
  }

  document.getElementById("dades").innerHTML =
    "La suma de los numeros y los comprendidos entre ellos son " + suma;
}
