function programa() {
  
  let number1 = parseInt(document.getElementById("number1").value);
  let number2 = parseInt(document.getElementById("number2").value);

  let resultado = number1 + number2;

  document.getElementById("resultado").value = resultado;
}