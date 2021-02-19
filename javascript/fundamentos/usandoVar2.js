var numero = 1 
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero) //sempre retorna 2, pois esta no mesmo escopo (global), sobrescreve a outra. OBS: FUJA DO ESCOPO GLOBAL


var sim = 'y' //var teste criada fora da funcion
function check() {
    var sim = 'x' // var criada dentro da funcion
    console.log('dentro =', sim)
}

check() //retorna valor da var sim dentro da function (x)
console.log('fora =', sim) //retorna valor da var sim fora da function, escopo global (y)
