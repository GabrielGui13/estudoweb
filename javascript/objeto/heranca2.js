// Cadeia de protótipos

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B'}
const filho = { __proto__: pai, attr3: 'C'}

console.log(filho.attr0) //undefined
console.log(filho.attr1) //o filho não tem, o pai não tem, mas o avô tem, então retorna A