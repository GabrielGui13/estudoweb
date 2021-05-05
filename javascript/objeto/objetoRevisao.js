// coleção dinâmica de pares chave/valor
const produto = new Object;
produto.nome = 'Cadeira';
produto['marca do produto'] = 'Generica';
produto.preco = 220;

console.log(produto);

delete produto.preco;
delete produto['marca do produto']; //forma de acessar

console.log(produto);

const carro = {
    modelo : 'A4', //atributo
    valor : 89000,
    proprietario : {
        nome: 'Raul',
        idade: 56,
        endereco: { //objeto
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{ //array
        nome: 'junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() { //funcao

    }
}

carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logradouro'] = 'Av. Gigante';

console.log(carro)
console.log(carro.condutores[1].nome)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores) //undefined
console.log(carro.condutores.length) //caso houvesse removido daria erro
