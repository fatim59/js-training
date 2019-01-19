'use strict'
/*
* creer une fonction fromYear qui pendra un seul paramètre ( un nombre entier ) une année et la
* fonction fromYear doit retourner le siecle de l'année entrée en paramètre.
*
* Vous devez avant tout maitriser les notions de fonctions, et d'opérations
*/


//Commencez à écrire votre code ici


function fromYear(year){
  var century = Math.floor((year +99) / 100);
  return century;
}

/*
* ces lignes d'en bas vont tester votre code et vous dire si cest juste ou pas donc n'y touchez pas
*/

//* Début des tests du code de l'étudiant

const verif = require('assert')

verif.strictEqual(typeof fromYear, 'function')
verif.strictEqual(fromYear.length, 1)
verif.strictEqual(fromYear(1905), 20)
verif.strictEqual(fromYear(1700), 17)

// Fin des tests tests */
