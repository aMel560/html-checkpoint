function estUnPalindrome(mot) {
  // on convertit le mot en minuscule
  const motEnMinuscules = mot.toLowerCase();

  // Initialiser les index pour les extrémités du mot
  let debut = 0; // index de debut
  let fin = motEnMinuscules.length - 1; //index de fin

  // Parcourir le mot jusqu'à ce que les indices se croisent
  while (debut < fin) {
    // on compare les caractères aux extrémités
    if (motEnMinuscules[debut] !== motEnMinuscules[fin]) {
      // Si les caractères sont différents, le mot n'est pas un palindrome
      return false;
    }

    // Déplacer les index vers l'intérieur
    debut++;
    fin--;
  }

  // Si on arrive ici, le mot est un palindrome
  return true;
}

// Exemples d'utilisation
console.log(estUnPalindrome("radar")); // true
console.log(estUnPalindrome("Amel")); // false
console.log(estUnPalindrome("Anna")); // true
console.log(estUnPalindrome("level")); // true
console.log(estUnPalindrome("civic")); // true
