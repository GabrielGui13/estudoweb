require('./global') //precisa carregar, não precisa de variavel, fica disponível em todo o sistema

console.log(MinhaApp.saudacao()) //padrão é o sistema de módulos
MinhaApp.nome = 'Eita!' //pode alterar em qualquer lugar
console.log(MinhaApp.nome) //foi feito Object.freeze, então não altera

//ter cuidado ao tocar o escopo global, evitar isso