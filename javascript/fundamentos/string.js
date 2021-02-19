const escola = 'Cod3r'

console.log(escola.charAt(4)) //passa o caractere que esta no indice quatro da string escola (01234)
console.log(escola.charAt(5)) //retorna o vazio, no js nao da erro, diferente de outras lingaugens
console.log(escola.charCodeAt(3)) //retorna o valor da tabela ascii/unicode
console.log(escola.indexOf('C')) //retorna qual o indice do caractere mencionado (C0 o1 d2 33 r4)

console.log(escola.substring(1)) //retorna os caracteres do indice 1 para frente (od3r)
console.log(escola.substring(0, 3)) //retorna os caracteres do indice 0 ate o 3 sem contar o 3 (Cod)

console.log('Escola '.concat(escola).concat('!')) //Adiciona a string escola para a constante e depois adiciona a exclamacao ao final
console.log('Escola ' + escola + '!') //Daria o mesmo resultado da operacao anterior, no caso da string ele vai concatenar
console.log('3' + 2) // 32, string ganha
console.log('3' - 2) // 1, number ganha

console.log(escola.replace(3, 'ee')) //troca o caractere no indice 3 pelo o que voce botar dps (codeer)
console.log(escola.replace(/\w/g, 'ei')) //troca todos os caracteres pelo proximo (eieieieiei)

console.log('Ana, Maria, Joao'.split(',')) //quebra a string em uma array que separa igual no C#