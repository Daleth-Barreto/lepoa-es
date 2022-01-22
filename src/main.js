#!/usr/bin/env node

//! Version: Daleth 0.0.0.1
//! Programador responsable: Hernandez Barreto Alan Daleth
//? Fecha de inicio 20-01-22 15:25
//? Fecha de culminacion 21-01-22 22:36

const {program} = require ('commander');
const fs = require('fs');
const esjs = require('./javascript/taductor')
let archivo;

class errorBasico{
    constructor(nombre, detalles){
        this.nombre = nombre;
        this.detalles = detalles;
    }
    log(){
        let resultado = `${this.nombre}: ${this.detalles}`
        console.log(resultado);
    }
}


program.version('Daleth 0.0.0.1').description('Un superset de javascript en espanol');
//? creamos nuestros comandos
program.command('e <archivo> <nuevo-archivo>').action((dir, nombre)=>{
    /* let dotIndex = dir.indexOf('.')
    const extencion = dir.substr(dotIndex) */
    if(fs.existsSync(dir)){
        archivo = fs.readFileSync(dir, 'UTF-8');
        esjs.traduce(archivo, nombre);
        /* if(extencion = '.esjs'){
            exports.esjs= archivo;
        } */
    }else{
        let error = new errorBasico('Archivo No Encontrado', 'El Archivo O Direccion No Existe O Es Erroneo').log();
        console.log(error);
    }
})

program.parse(process.argv);