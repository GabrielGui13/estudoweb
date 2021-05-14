const removerVogal = function(palavra) {
    const vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    vogais.forEach(vogal => palavra = palavra.replace(vogal, ''))
    return palavra
}
function removerVogal2(frase) {
    return frase.replace(/[aeiou]/ig, '')
}

console.log(removerVogal("gabriel"))
console.log(removerVogal("Cod3r"))
console.log(removerVogal('Fundamentos'))