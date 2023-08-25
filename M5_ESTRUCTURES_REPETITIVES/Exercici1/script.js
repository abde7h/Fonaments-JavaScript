function programa() {
  // Pregunta a l'usuari/ària pel nombre de paraules
  const numParaules = parseInt(prompt("Quantes paraules vols introduir?"));

  // Crea un array per a les paraules
  const paraules = [];

  // Demana a l'usuari/ària que introdueixi les paraules i les guarda a l'array
  for (let i = 0; i < numParaules; i++) {
    const paraula = prompt(`Introdueix la paraula número ${i + 1}:`);
    paraules.push(paraula);
  }

  // Mostra les paraules per pantalla
  console.log(`Les ${numParaules} paraules introduïdes són:`);
  const llistaOrdenada = document.createElement("ol");
  const llistaParaules = document.getElementById("llista-paraules");
  for (let i = 0; i < numParaules; i++) {
    console.log(`${i + 1}. ${paraules[i]}`);
    const elementLlista = document.createElement("li");
    elementLlista.innerHTML = `${i + 1}. ${paraules[i]}`;
    llistaOrdenada.appendChild(elementLlista);
  }
  llistaParaules.appendChild(llistaOrdenada);
}
