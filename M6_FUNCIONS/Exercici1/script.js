function suma() {
  let number1 = parseInt(document.getElementById("number1").value);
  let number2 = parseInt(document.getElementById("number2").value);

  let resultado = number1 + number2;

  document.getElementById("resultado").value = resultado;
}
function resta() {
  let number1 = parseInt(document.getElementById("number1").value);
  let number2 = parseInt(document.getElementById("number2").value);

  let resultado = number1 - number2;

  document.getElementById("resultado").value = resultado;
}
function multiplicacio() {
  let number1 = parseInt(document.getElementById("number1").value);
  let number2 = parseInt(document.getElementById("number2").value);

  let resultado = number1 * number2;

  document.getElementById("resultado").value = resultado;
}

function divisio() {
  let number1 = parseInt(document.getElementById("number1").value);
  let number2 = parseInt(document.getElementById("number2").value);

  let resultado = number1 / number2;

  document.getElementById("resultado").value = resultado;
}
