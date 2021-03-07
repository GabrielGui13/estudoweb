function fatorial (num) {
    let total = 1
    for (let i = 1; i <= num; i++) {
        total *= i
    }

    return total
}

console.log(fatorial(5))
console.log(fatorial(6))
console.log(fatorial(10))
console.log(fatorial(9))