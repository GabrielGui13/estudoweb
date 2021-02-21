const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] //foram ignorados n2 (7) e o n4 (8)
console.log(n1, n3, n5, n6) //10, 9, undefined e 0

const [, [, nota]] = [[, 8, 8], [9, 6, 8]] //ignorou o primeiro elemento do array primario e do array secundario apos o const
console.log(nota) //vai retornar 6, pois o primeiro array eh ignorado, e o primeiro elemento do segundo array tambem eh ignorado


