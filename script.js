function generate() {
  const input = document.getElementById("inputText").value;
  const output = document.getElementById("output");

  if (!input.trim()) {
    alert("Merci d’écrire ou coller un cours !");
    return;
  }

  // Simulation de résumé pour l’instant
  const summary = simulateSummary(input);

  output.innerHTML = `<h2>📄 Fiche Résumée</h2><p>${summary}</p>`;
  output.classList.remove("hidden");
}

function simulateSummary(text) {
  // Simule un résumé simple
  return `
    Voici les points importants :
    - ${text.split('.')[0].slice(0, 80)}...
    - ${text.split('.')[1]?.slice(0, 80) || "..."}

    Ce résumé est automatique. Une version IA sera ajoutée bientôt !
  `;
}

function generate() {
  const input = document.getElementById("inputText").value;
  const output = document.getElementById("output");

  if (!input.trim()) {
    alert("Merci d’écrire ou coller un cours !");
    return;
  }

  const summary = simulateSummary(input);
  output.innerHTML = `<h2>📄 Résumé</h2><p>${summary}</p>`;
  output.classList.remove("hidden");
}

function simulateSummary(text) {
  return `Résumé automatique :\n- ${text.slice(0, 100)}...\n- ${text.slice(100, 200)}...`;
}
