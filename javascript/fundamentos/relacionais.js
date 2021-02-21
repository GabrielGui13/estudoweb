console.log('01)', '1' == 1) //true pois eh verdadeiro, esta comparando o valor e nao o tipo
console.log('01)', '01' === 1) //false pois nao eh estritamente igual o outro, um eh string e o outro eh number
console.log('03)', '03' != 3) //false pois eles sao iguais
console.log('04)', '3' !== 3) //true pois sao diferentes, um eh string e outro eh number

console.log('05)', 3 < 2) //false, pois 3 eh maior
console.log('06)', 3 > 2) //true pois 2 eh menor
console.log('07)', 3 <= 2) //false, pois 3 eh maior
console.log('08)', 3 >= 2) //true, pois 2 eh menor, OBS: Tomar cuidado com o =, eh sempre depois

const d1 = new Date(0) // 1 de Janeiro de 1970 (JavaScript)
const d2 = new Date(0) // 1 de Janeiro de 1970\

console.log('09)', d1 == d2) //false
console.log('10)', d1 === d2) //false, os dois comparam a referencia de memoria 
console.log('11)', d1.getDate() == d2.getDate()) //true, transformou em number, pois compara o tempo da data ate hoje em valor numero (milissegundos), atributo de Date

console.log('12)', undefined == null) //true, pois eles nao armazenam nada
console.log('13)', undefined === null) //false, pois eles nao sao a mesma coisa



