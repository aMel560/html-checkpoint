// Fonction pour calculer le produit point de deux vecteurs
function dot_product(v1, v2) {
  if (v1.length !== v2.length) {
    console.log("Les vecteurs doivent avoir la même taille.");
    return null;
  }

  let ps = 0;
  for (let i = 0; i < v1.length; i++) {
    ps += v1[i] * v2[i];
  }

  return ps;
}

// Exemple d'utilisation
const v1 = [2, 3, 5];
const v2 = [1, 4, 2];

const produit = dot_product(v1, v2);
if (produit !== null) {
  console.log("Le produit scalaire est :", produit);
} else {
  console.log("Impossible de calculer le produit scalaire.");
}

// Fonction pour déterminer si deux vecteurs sont orthogonaux
function are_orthogonal(v1, v2) {
  return dot_product(v1, v2) === 0;
}

// Fonction pour trier un tableau de vecteurs par insertion
function insertion_sort(vectors) {
  for (let i = 1; i < vectors.length; i++) {
    let key = vectors[i];
    let j = i - 1;
    while (j >= 0 && are_orthogonal(vectors[j], key)) {
      vectors[j + 1] = vectors[j];
      j = j - 1;
    }
    vectors[j + 1] = key;
  }
  return vectors;
}

// Exemple d'utilisation
let vectors = [
  [1, 0],
  [0, 1],
  [1, 1],
  [1, -1],
];
let sortedVectors = insertion_sort(vectors);
console.log(sortedVectors);
