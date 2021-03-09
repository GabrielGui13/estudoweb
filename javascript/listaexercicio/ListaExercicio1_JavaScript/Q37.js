function pa (a1, n, r) {
    let an = a1 + (n - 1) * r
    let arrayPAtermos = []

    for (let i = 0; i < n; i++) {
        arrayPAtermos.push(a1 + (i * r))
    }
    
    let sn = ((a1 + an) * n) / 2

    return `Termos da PA: [${arrayPAtermos}]
Soma dos termos: ${sn}`
}

function pg (a1, n, q) {
    let an = a1 * (q ** (n - 1))
    let arrayPGtermos = []

    for (let i = 0; i < n; i++) {
        arrayPGtermos.push(a1 * (q ** i))
    }
    
    let sn = a1 * (Math.pow(q, n) - 1) / (q - 1)

    return `Termos da PG: [${arrayPGtermos}]
Soma dos termos: ${sn}`
}   

console.log(pa(26, 10, 5))
console.log('')
console.log(pg(2, 20, 2))