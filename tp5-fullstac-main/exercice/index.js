function hello(nom = 'Monde') {
    return `Bonjour ${nom} depuis mon package !`;
}

function addition(a, b) {
    return a + b;
}

function multiplication(a, b) {
    return a * b;
}

module.exports = {
    hello,
    addition,
    multiplication
};