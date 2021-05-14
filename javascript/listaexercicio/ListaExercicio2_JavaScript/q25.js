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

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))
console.log(buscarPalavrasSemelhantes("java", ["javascript", "java", "c++"]))
console.log(buscarPalavrasSemelhantes("oi", ['oito', 'oi', 'gabriel', 'dezoito', 'moita', 'lindo']))