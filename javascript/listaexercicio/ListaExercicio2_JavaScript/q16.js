const checarAnoBissexto = function(ano) {
    return ano % 400 == 0 || (ano % 4 == 0 && ano % 100 != 0)
}
const checarAnoBissexto2 = function (ano) {
    return new Date (ano, 1, 29).getDate() == 29
}

console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto2(2020))
console.log(checarAnoBissexto(2100))