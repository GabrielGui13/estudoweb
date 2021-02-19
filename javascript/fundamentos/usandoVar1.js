{
    {
        {
            { 
                var sera =  'Sera!!'
                console.log(sera) //vairavel var dentro de varios blocos ainda assim fica visivel de qualquer lugar
            }
        }
    }
}
console.log(sera) //o console imprime o memso resultado

function teste() {
    var local = 123
    console.log(local)
}

teste()
//console.log(local), voce nao consegue acessar a variavel pois o escopo esta visivel apenas na funcao
//var ou eh nivel global, visivel pra todos, ou cria em um escopo de funcao, que so e visivel dentro da funcao