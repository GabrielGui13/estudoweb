const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec() // 'Global' = por conta do contexto lexico, ela acha o valor global, tem consciencia do local que foi definida