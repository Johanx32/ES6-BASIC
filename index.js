//importar el componente sumar
//const sumar = require('./sumar')
//const estudiante = require('./estudiante')
//importar module
//import {sumar, restar} from './sumar.js'
//Tipos de variables
//let: Valor de variables 
//let a = 10
//const: Valores constantes 
//const b = 20
//Destructurar un objeto:
//let { first_name, last_name } = estudiante
//console.log(`Nombre: ${ first_name}`.bgYellow.blue.underline)
//console.log(`Apellido: ${ last_name}`.bgGreen.blue.underline)

const colors = require('colors');
const materias = require('./materias')


//Recorrido del arreglo 
materias.forEach((materia) => {
    if(materia.instructor == 'Cristian Buitrago'){
        console.log(`Nombre: ${ materia.nombre}`. bgCyan)
        console.log(`Instructor: ${ materia.instructor}`. bgWhite.black)
    }

})

//map: Metodo de arreglos en es6 
//  crea un arreglo a partir de otro

const profesores = materias.map((materia) =>{
    return materia.instructor 
})

console.log(profesores)

//find: Localizar elemento de un arreglo 
//      Que cumplan cierta condicion

//filter: Localizar elementos de un arreglo 
//      Que cumplan cierta condicion

const PHP = materias.filter((materia) => {
    return materia.instructor === "Cristian Buitrago"
})

console.log(PHP)