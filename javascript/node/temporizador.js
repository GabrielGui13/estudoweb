const schedule = require('node-schedule')

// 0 = domingo, 7 = sabado, se fosse 5 em vez de */5, so seria executado no minuto 5
const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 2') //de 5 em s em qualquer minuto de 12 horas, ignorando dia do mes, o mes, na terça