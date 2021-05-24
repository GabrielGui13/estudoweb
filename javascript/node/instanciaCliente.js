const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')
const contadorC = require('./instanciaNova')() //retorna instancia nova (função factory), invocando função
const contadorD = require('./instanciaNova')() 

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor) //3, pois node por padrão faz cache, o que fizer no contadorA vai no B, unica instancia

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) //cada um é um objeto único