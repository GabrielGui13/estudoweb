const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2] ()
funcs[8] () //retorna 10 pois var nao tem escopo de bloco, e retorn o valor que tem quando saiu do laco