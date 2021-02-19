const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2] ()
funcs[6] () //let tem consciencia do local que foi definida
funcs[8] () //retorna 2, ,6 e 8 e nao o 10 pois leu o escopo do bloco da function