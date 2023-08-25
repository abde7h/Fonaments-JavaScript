function programa() {
  let mes = parseInt(document.getElementById("mesInput").value);
  let mensaje;

  switch (mes) {
    case 1:
      mensaje = "El mes de enero tiene 31dias";
      break;
    case 2:
      mensaje = "El mes de febrero tiene 28 dias";
      break;
    case 3:
      mensaje = "El mes de marzo tiene 31 dias";
      break;
    case 4:
      mensaje = "El mes de abril tiene 30 dias";
      break;
    case 5:
      mensaje = "El mes de mayo tiene 31 dias";
      break;
    case 6:
      mensaje = "El mes de junio tiene 30 dias";
      break;
    case 7:
      mensaje = "El mes de julio tiene 31 dias";
      break;
    case 8:
      mensaje = "El mes de agosto tiene 31 dias";
      break;
    case 9:
      mensaje = "El mes de septiembre tiene 30 dias";
      break;
    case 10:
      mensaje = "El mes de octubre tiene 31 dias";
      break;
    case 11:
      mensaje = "El mes de noviembre tiene 30 dias";
      break;
    case 12:
      mensaje = "El mes de diciembre tiene 31 dias";
      break;
    default:
      mensaje = "Has introducido un numero del mes erroneo";
      break;
  }
  document.getElementById("dades").innerHTML = mensaje;
}
