let num1 = 1
let num2 = 2

num1++ //acrescenta uma unidade ao valor da variavel (num1 = 1 + 1)
console.log(num1)

--num1 //subtrai uma unidade ao valor da variavel (num1 = 1 - 1)
console.log(num1)

console.log(++num1 === num2--) //true, pois o ++num1 adiciona antes de comparar com o num2, que so subtrai apos a comparacao

//sentenca de codigo que eh confusa, procurar deixar o codigo o mais simples possivel, nao colocar incremento dentro da comparacao

console.log(num1 === num2) //false, comprovamos o dito acima, pois apos a comparacao foi subtraido uma unidade

