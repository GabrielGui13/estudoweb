const estaEntre = function (num, min, max, inc = false) {
    if (inc) {
        return num >= min && num <= max
    }
    else return num < min || num > max
}

console.log(estaEntre(10, 100, 50))
console.log(estaEntre(16, 100, 160))
console.log(estaEntre(3, 150, 3))
console.log(estaEntre(3, 150, 3, true))