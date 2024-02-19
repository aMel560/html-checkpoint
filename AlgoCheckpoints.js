//premiere tache

// Fonction pour compter les mots et les voyelles dans une phrase
function compterMotsEtVoyelles(phrase) {
  // Initialiser les compteurs
  let nombreDeMots = 0;
  let nombreDeVoyelles = 0;

  // Parcourir la phrase caractère par caractère
  for (let i = 0; i < phrase.length; i++) {
    let caractereCourant = phrase[i].toLowerCase(); // Convertir en minuscule pour simplifier la vérification des voyelles

    // Vérifier si le caractère est une lettre
    if (/[a-z]/.test(caractereCourant)) {
      // Incrémenter le compteur de voyelles si c'est une voyelle
      if (/[aeiouy]/.test(caractereCourant)) {
        nombreDeVoyelles++;
      }
    }
    // Vérifier si le caractère est un espace
    else if (caractereCourant === " ") {
      // Incrémenter le compteur de mots
      nombreDeMots++;
    }
  }

  // Ajouter le dernier mot car la boucle s'arrête avant de compter le dernier espace
  if (phrase[phrase.length - 1] !== " ") {
    nombreDeMots++;
  }

  // Afficher les résultats
  console.log("Nombre de mots : " + nombreDeMots);
  console.log("Nombre de voyelles : " + nombreDeVoyelles);
}

// Exemple d'utilisation
let phraseTest =
  "Ceci est un exemple de phrase. Elle contient plusieurs mots et voyelles.";
compterMotsEtVoyelles(phraseTest);

//deuxieme tache
function sommeElementsDistincts(ensemble1, ensemble2) {
  let somme = 0;
  let elementsDejaAjoutes = [];

  // Parcourir l'ensemble 1
  for (let i = 0; i < ensemble1.length; i++) {
    // Vérifier si l'élément n'est pas déjà ajouté
    if (!elementsDejaAjoutes.includes(ensemble1[i])) {
      somme += ensemble1[i];
      elementsDejaAjoutes.push(ensemble1[i]);
    }
  }

  // Parcourir l'ensemble 2
  for (let i = 0; i < ensemble2.length; i++) {
    // Vérifier si l'élément n'est pas déjà ajouté
    if (!elementsDejaAjoutes.includes(ensemble2[i])) {
      somme += ensemble2[i];
      elementsDejaAjoutes.push(ensemble2[i]);
    }
  }

  return somme;
}

// Exemple d'utilisation
let ensemble1 = [3, 1, 7, 9];
let ensemble2 = [2, 4, 1, 9, 3];

let resultat = sommeElementsDistincts(ensemble1, ensemble2);
console.log("Résultat : " + resultat);
