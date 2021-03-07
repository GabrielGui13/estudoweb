function anoBissexto (ano) {
    if (ano <= 0) {
        return false
    }
    if (ano % 400 == 0) {
        return true
    }
    else if (ano % 100 == 0) {
        return false
    }
    else if (ano % 4 == 0) {
        return true
    } 
    else return false
}

console.log(anoBissexto(0))
console.log(anoBissexto(2000))
console.log(anoBissexto(2002))
console.log(anoBissexto(2006))
console.log(anoBissexto(2008))
console.log(anoBissexto(2020))