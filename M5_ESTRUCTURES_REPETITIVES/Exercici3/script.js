const numeroAleatorio = Math.floor(Math.random() * 11);

function adivinarNumero() {
  // Obtener el número introducido por el usuario/a
  const numeroAdivinado = parseInt(document.getElementById("numero").value);

  // Comparar el número introducido con el número aleatorio
  if (numeroAdivinado === numeroAleatorio) {
    // Mostrar mensaje de felicitación si se adivina el número
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `¡Enhorabuena, has adivinado el número ${numeroAleatorio}!`;
  } else {
    // Mostrar mensaje de error si no se adivina el número
    const resultado = document.getElementById("resultado");
    resultado.innerHTML =
      "El número introducido no es correcto. Inténtalo de nuevo.";
  }
}
