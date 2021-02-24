// Exemplo de callback no browser

document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu') //sempre que clicar no body, imprime a mensagem no console
}