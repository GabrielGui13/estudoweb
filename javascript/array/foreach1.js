const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array) { //função do foreach recebe 3 parametros = (valor, indice, array), outro ficaria undefined
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado) //cria função antes
aprovados.forEach(exibirAprovados)