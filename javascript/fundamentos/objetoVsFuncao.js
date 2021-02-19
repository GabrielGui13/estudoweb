console.log(typeof Object) //function
console.log(typeof Object()) //object, pois instanciou a funcao

/* A instanciação é um processo por meio do qual se realiza a cópia de um objeto (classe) existente. 
Uma classe, a qual tem a função de determinar um tipo de dado, deve ser instanciada para que possamos utilizá-la. */

const client = function() {}

console.log(typeof client)
console.log(typeof new client) //instanciou a funcao, pela palavra new  

class Produto {} //forma diferente de chamar uma funcao
console.log(typeof Produto)
console.log(typeof new Produto) 
