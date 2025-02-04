// Fonction pour récupérer les citations depuis un fichier JSON
let quotes = [];  // Initialisation d'un tableau vide

// Charger le fichier JSON
fetch('quotes.json')
  .then(response => response.json())  // Transformer le contenu en tableau
  .then(data => {
    quotes = data;  // Affecter les citations au tableau quotes
  })
  .catch(error => console.error('Erreur de chargement du fichier JSON :', error));

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("generate-btn").addEventListener("click", function() {
  const randomIndex = getRandomNumber(0, quotes.length - 1);
  document.getElementById("quote").innerText = quotes[randomIndex];
});
