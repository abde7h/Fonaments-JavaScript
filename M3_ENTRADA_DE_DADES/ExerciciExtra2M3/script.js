function programa() {
  let ample = prompt("Introdueix l'ample de la paret a pintar: ");
  let alt = prompt("Introdueix l'altura de la paret a pintar: ");
  let mans = prompt("Introdueix la quantitat de mans que vols aplicar: ");

  let area;
  const COBERTURA_A_LITROS = 1 / 12;
  let litres;
  area = parseInt(ample) * parseInt(alt);

  litres = COBERTURA_A_LITROS * parseInt(area) * mans;

  document.getElementById("dades").innerHTML =
    "Necesitaras " + mans + " litres";
}
