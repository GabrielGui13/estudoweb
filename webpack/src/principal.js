// const Pessoa = require('./pessoa')
import Pessoa from './pessoa'
//import './modulos/moduloA'
import './assets' //busca o index.html padrao

const atendente = new Pessoa()
console.log(atendente.cumprimentar())