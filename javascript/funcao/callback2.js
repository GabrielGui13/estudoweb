const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

 // Sem callback

 const notasBaixas1 = []
 for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i]) //o i representa a mudanca dos indices
    }
 }

 console.log(notasBaixas1)

 // Com callback

 const notasBaixas2 = notas.filter(function(nota) {
    return nota < 7 //se for true, ele eh inserido no array
 })

 console.log(notasBaixas2)

 // Callback e arrow function

 const notasBaixas3 = notas.filter(nota => nota < 7)

 console.log(notasBaixas3)

 // Outra forma

 const notasMenoresQue7 = nota => nota < 7
 const notasBaixas4 = notas.filter(notasMenoresQue7)
 console.log(notasBaixas4)