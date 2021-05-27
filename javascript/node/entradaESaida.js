const anonimo = process.argv.indexOf('-a') !== -1 //tipo diferente de ler o terminal
//console.log(anonimo) //forma de pegar parametros atraves da chamada do terminal

if(anonimo) { //caso a flag -a seja passada
    process.stdout.write('Fala Anonimo!!\n') //standard out, imprime isso, nao quebra a linha
    process.exit() 
}
else {
    process.stdout.write('Digite seu nome: ')
    process.stdin.on('data', data => { //standard in, event on data (digitar e enviar com enter), chama uma funcao com o que digitou e o enter (\n)
        const nome = data.toString().replace('\r\n', '') //substituindo a quebra de linha do enter, no windows eh \r\n
        process.stdout.write(`Fala ${nome}!!\n`) //imprime o nome passado
        process.exit() //encerra a aplicacao de forma prematura, ja faz automaticamente
    })
}