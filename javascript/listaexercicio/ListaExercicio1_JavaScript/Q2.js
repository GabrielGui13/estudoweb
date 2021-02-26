function triangulo (a, b, c) {
    
    if (a >= b + c || b >= a + c || c >= a + b) return 'Nao eh um triangulo'
    else {
        if (a == b && a == c) return 'Equilatero'
        if (a == b || b == c || c == a) return 'Isosceles'
        else return 'Escaleno'
    }
}

console.log(triangulo(3, 3, 3)) //Equilatero
console.log(triangulo(3, 3, 4)) //Isosceles
console.log(triangulo(3, 4, 5)) //Escaleno
console.log(triangulo(3, 3, 6)) //Nao eh um triangulo