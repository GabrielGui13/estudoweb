let numero = 1
{
    let numero = 2
    console.log('dentro = ', numero) //retorna 2 pois let tem escopo global, de funcao e de bloco tbm, deu preferencia ao de dentro
}
console.log('fora =', numero) //retorna o de fora pois deu preferencia ao escopo global