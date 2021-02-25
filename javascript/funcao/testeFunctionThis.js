function empregado(nome, salario, idade) {
    this.nome = nome
    this.salario = salario
    this.idade = idade
 
    this.getEmpregado = () => {
        return {
            nome,
            salario,
            idade
        }
    }
}
 
const e1 = new empregado('Jorge', 700, 19)
console.log(e1.getEmpregado())