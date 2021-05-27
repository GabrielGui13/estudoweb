//Promises: podem ser resolvidas ou rejeitadas
//Acessar um arquivo remoto pela url, se conseguir acessar o callback de resolve é chamado
//Se não obtiver sucesso ao pegar o arquivo, uma callback de reject é lançada

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) //frase passada no resolve será passada para o primeiro then, aceita um unico parametro
        }, segundos * 1000) //milissegundos
    })
}

//criou uma função que recebe dois parametros e retorna uma promessa 
//dentro da promessa tem um setTimeout simulando tempo de processamento
//Quando a promessa for atendida, vai chamar a função resolve()

//then ilimitado
//catch único
falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase)) 
    .catch(e => console.log(e)) //tratar o erro com o reject, recebe a frase de parametro usando reject(frase)
//Quando retorna uma promise, ela tem a função then
//Ela é chamada quando você resolve a promise passando o objeto que você deseja que seja passado