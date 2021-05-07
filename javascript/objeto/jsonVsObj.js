const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c}}
console.log(JSON.stringify(obj)) //Não aparece a função, pois JSON é um formato textual de dados, e não executado

//console.log(JSON.parse("{a: 1, b: 2, c: 3}")) sem aspas no atributo
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}")) aspas simples no atributo
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": [], "e": {}}')) //armazena tudo