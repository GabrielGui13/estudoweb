function tratarErroELancar (erro) {
    throw 'Estamos resolvendo o problema...'
    //lanca uma mensagem ao usuario
}
 
function imprimirNomeGritado (obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
        //bloco de codigo que tem outro codigo que pode gerar um erro
    } catch (e) {
        //uma vez que gerou uma excecao, automaticamente o erro cai no catch e voce pode trata-lo, ou mostrar uma mensagem para o usuario ao enviar ao throw ao chamar a funcao
        tratarErroELancar (e)
    } finally {
        console.log('final')
        //sempre executado caso ocorra erro ou nao
    }
}

const obj = {name: 'Roberto'} 
imprimirNomeGritado(obj)