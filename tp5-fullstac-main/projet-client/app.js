// Importer le package personnalisé
const monPackage = require('exercice');

console.log('=== TEST DE MON PACKAGE PERSONNALISÉ ===\n');

// Tester la fonction hello()
console.log('1. Test de la fonction hello():');
console.log(monPackage.hello());
console.log(monPackage.hello('Alice'));
console.log(monPackage.hello('Bob'));
console.log('');

// Tester les fonctions mathématiques
console.log('2. Test des fonctions mathématiques:');
console.log(`Addition: 15 + 7 = ${monPackage.addition(15, 7)}`);
console.log(`Multiplication: 6 * 8 = ${monPackage.multiplication(6, 8)}`);
console.log('');

// Tester la fonction date
console.log('3. Test de la fonction date:');
console.log(`Date actuelle: ${monPackage.getDate()}`);
console.log('');

// Tester la fonction formatage
console.log('4. Test de la fonction formatage:');
console.log(`Formatage euros: ${monPackage.formatNombre(1234.56)}`);
console.log(`Formatage dollars: ${monPackage.formatNombre(99.99, '$')}`);
console.log('');

// Exemple d'utilisation combinée
console.log('5. Exemple combiné:');
const prixUnitaire = 25.50;
const quantite = 3;
const total = monPackage.multiplication(prixUnitaire, quantite);
console.log(monPackage.hello('Client'));
console.log(`Prix total: ${monPackage.formatNombre(total)}`);