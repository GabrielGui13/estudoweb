const buscarPalavrasSemelhantes = function(x, array) {
    const retorno = []
    array.forEach(p => {
        let palavra = [...p]
        for (let i = 0; i < palavra.length; i++) {
            if ((palavra.slice(i, x.length + i)).join('') == x) retorno.push(p)
        }
    })
    return retorno
}

function buscarPalavrasSemelhantes2(inicio, palavras) {
    return palavras.filter(palavra => palavra.includes(inicio))
}

    
console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))
console.log(buscarPalavrasSemelhantes("java", ["javascript", "java", "c++"]))
console.log(buscarPalavrasSemelhantes("oi", ['oito', 'oi', 'gabriel', 'dezoito', 'moita', 'lindo']))
console.log(buscarPalavrasSemelhantes2("pro", ["programação", "mobile", "profissional"]))
console.log(buscarPalavrasSemelhantes2("java", ["javascript", "java", "c++"]))
console.log(buscarPalavrasSemelhantes2("oi", ['oito', 'oi', 'gabriel', 'dezoito', 'moita', 'lindo']))