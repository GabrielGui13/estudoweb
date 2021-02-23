let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a //funcao arrow sempre eh anonima, se quiser chamar ela tem que aramzenar em uma variavel
}

dobro = a => 2 * a //nao necessita do return (retorno implicito)

console.log(dobro(Math.PI))

let ola = function() {
    return 'Ola'
}

ola = () => 'Ola' //melhor forma (padrao)
ola = _ => 'Ola' //possui um param

console.log(ola())