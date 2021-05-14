const contarCaractere = function(c, frase) {
    return [...frase].filter(e => c == e).length
}

console.log(contarCaractere("r", "A sorte favorece os audazes"))
console.log(contarCaractere("c", "Conhece-te a ti mesmo"))