const schedule = require('node-schedule')

// 0 = domingo, 7 = sabado, se fosse 5 em vez de */5, so seria executado no minuto 5
// scheduleJob (segundos, minutos, hora, dia do mes, mes, dia da semana, funcao)
const tarefa1 = schedule.scheduleJob('*/5 * 22 * * 3', function () { //de 5 em s em qualquer minuto de 12 horas, ignorando dia do mes, o mes, na terça
    console.log('Executando tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel() //cancela uma funcao de time
    console.log('Cancelando tarefa!')
}, 20000) //20 segundos

//setImmediate  =>  dispara instantaneamente
//setInterval  =>  dispara uma funcao a cada numero tempo passado por parametro

const regra = new schedule.RecurrenceRule() //regra de recoorencia, executando de forma recorrente
regra.dayOfWeek = [new schedule.Range(1, 5)] //segunda() a sexta(5)
regra.hour = 22 //hora atual do meu codigo
regra.second = 30 //segundos, executa a cada um minuto de segunda a sexta as 22h

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
}) 
