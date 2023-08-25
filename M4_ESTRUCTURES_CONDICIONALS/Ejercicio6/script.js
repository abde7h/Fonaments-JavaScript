function programa() {
  // Demana a l'usuari/ària el dia i el mes del naixement
  const dia = parseInt(prompt("En quin dia vas néixer?"));
  const mes = parseInt(
    prompt("En quin mes vas néixer? (introdueix un número de l'1 al 12)")
  );

  // Determina el signe del zodíac basat en la data de naixement
  let signe = "";
  if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 19)) {
    signe = "Àries-Aries";
  } else if ((mes == 4 && dia >= 20) || (mes == 5 && dia <= 20)) {
    signe = "Taure-Tauro";
  } else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
    signe = "Bessons-Géminis";
  } else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) {
    signe = "Cranc-Cáncer";
  } else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) {
    signe = "Lleó-Leo";
  } else if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) {
    signe = "Verge-Virgo";
  } else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) {
    signe = "Balança-Libra";
  } else if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) {
    signe = "Escorpí-Escorpión";
  } else if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)) {
    signe = "Sagitari-Sagitario";
  } else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 19)) {
    signe = "Capricorn-Capricornio";
  } else if ((mes == 1 && dia >= 20) || (mes == 2 && dia <= 18)) {
    signe = "Aquari-Acuario";
  } else if ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) {
    signe = "Peixos-Piscis";
  }

  // Mostra el signe del zodíac corresponent
  if (signe) {
    document.getElementById("dades").innerHTML =
      "El teu signe del zodíac es: " + signe;
  } else {
    console.log("La data introduïda no és vàlida.");
  }
}
