const numeroAleatorio = Math.floor(Math.random() * 11);
let contador = 0;
function adivinarNumero() {
  const numeroAdivinado = parseInt(document.getElementById("numero").value);

  if (numeroAdivinado === numeroAleatorio) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `¡Enhorabuena, has adivinado el número ${numeroAleatorio}!`;
  } else {
    contador++;

    const resultado = document.getElementById("resultado");
    if (contador < 5) {
      resultado.innerHTML =
        "El número introducido no es correcto. Inténtelo de nuevo.";
    } else {
      resultado.innerHTML = `Lo siento, se han agotado los intentos. El número aleatorio era ${numeroAleatorio}.`;
    }
  }
}
