console.log(typeof String) //function
console.log(typeof Array) //function
console.log(typeof Object) //function
//todas tem prototype

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Gabriel'.reverse()) //imprime a contrario

Array.prototype.first = function() {
    return this[0];
}

console.log([1, 2, 3, 4, 5].first()) //imprime 1
console.log(['a', 'b', 'c'].first()) //imprime a

String.prototype.toString = function () {
    return 'Lascou tudo' //nao modificar 
} 

console.log('Gabriel'.reverse()) //Qualquer string é lascou tudo