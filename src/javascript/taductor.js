const fs = require('fs');
const cin =`process.stdin.on("data", function(data){
    let input = data.toString().trim();
    return input;
});`
const traduce= (contenido, nombre)=>{
    //* consola de navegador
    contenido = contenido.replaceAll('ALERTA', 'alert');
    contenido = contenido.replaceAll('INPUTALERT', 'prompt');
    contenido = contenido.replaceAll('IMPRIME', 'console.log');
    contenido = contenido.replaceAll('IMPRIME.INFO', 'console.info');
    contenido = contenido.replaceAll('IMPRIME.ADV', 'console.warn');
    contenido = contenido.replaceAll('IMPRIME.ERR', 'console.error');
    contenido = contenido.replaceAll('CONSOLA.LIMPIA', 'console.clear');
    //* funciones
    contenido = contenido.replaceAll('FUNCION', 'function');
    contenido = contenido.replaceAll('RETORNA', 'return');
    //* condicionales
    contenido = contenido.replaceAll('SI', 'if');
    contenido = contenido.replaceAll('ifNO', 'else');
    contenido = contenido.replaceAll('SINO', 'else');

    contenido = contenido.replaceAll('SEGUN', 'switch');
    contenido = contenido.replaceAll('CASO', 'case');
    contenido = contenido.replaceAll('porDefecto', 'default');
    //* bucles
    contenido = contenido.replaceAll('PARA', 'for');

    contenido = contenido.replaceAll('#EN', 'in');
    contenido = contenido.replaceAll('#DE', 'of');

    contenido = contenido.replaceAll('MIENTRAS', 'while');
    contenido = contenido.replaceAll('HAZ', 'do');
    contenido = contenido.replaceAll('PAUSA', 'break');
    contenido = contenido.replaceAll('CONTINUA', 'continue');

    //* POO
    contenido = contenido.replaceAll('NUEVO', 'new');
    contenido = contenido.replaceAll('CLASE', 'class');
    contenido = contenido.replaceAll('EXTIENDE', 'extends');
    contenido = contenido.replaceAll('ESTATICO', 'static');
    contenido = contenido.replaceAll('OBTEN', 'get');
    contenido = contenido.replaceAll('ASIGNA', 'set');

    //* metodos de cadenas
    contenido = contenido.replaceAll('CONCATENA', 'concat');
    contenido = contenido.replaceAll('COMIENZA', 'startsWith');
    contenido = contenido.replaceAll('TERMINA', 'endsWith');
    contenido = contenido.replaceAll('INCLUYE', 'includes');
    contenido = contenido.replaceAll('indiceDe', 'indexOf');
    contenido = contenido.replaceAll('ultimoIndiceDe', 'lastIndexOf');
    contenido = contenido.replaceAll('tamanoDe', 'length');
    contenido = contenido.replaceAll('REEMPLAZA', 'replace');
    contenido = contenido.replaceAll('reemplazaTodo', 'replaceAll');

    contenido = contenido.replaceAll('rellenaInicio', 'padStart');
    contenido = contenido.replaceAll('rellenaFinal', 'padEnd');
    contenido = contenido.replaceAll('REPITE', 'repeat');

    contenido = contenido.replaceAll('DIVIDE', 'split');
    contenido = contenido.replaceAll('SUBCADENA', 'substring');
    contenido = contenido.replaceAll('SUBCDN', 'substr');//?
    contenido = contenido.replaceAll('aMinusculas', 'toLowerCase');
    contenido = contenido.replaceAll('aMayusculas', 'toUpperCase');
    contenido = contenido.replaceAll('aString', 'toString');
    contenido = contenido.replaceAll('quitaEspacios', 'trim');
    contenido = contenido.replaceAll('quitaEspaciosInicio', 'trimStart');
    contenido = contenido.replaceAll('quitaEspaciosFinal', 'trimEnd');
    contenido = contenido.replaceAll('valorDe', 'valueOf');
    //* todos de numeros
    contenido = contenido.replaceAll('aBinario', 'toString(2)');
    contenido = contenido.replaceAll('aOctal', 'toString(8)');
    contenido = contenido.replaceAll('aHexadecimal', 'toString(16)');
    contenido = contenido.replaceAll('aFlotante', 'toString(10)');
    contenido = contenido.replaceAll('aEntero', 'toString(10)');
    //* metodos de arrays
    //transformadores
    contenido = contenido.replaceAll('eliminaUltimo', 'pop');
    contenido = contenido.replaceAll('eliminaPrimero', 'shift');
    contenido = contenido.replaceAll('añadeUltimo', 'push');
    contenido = contenido.replaceAll('INVIERTE', 'reverse');
    contenido = contenido.replaceAll('añadePrimero', 'unshift');
    contenido = contenido.replaceAll('ORDENA', 'sort');
    contenido = contenido.replaceAll('CAMBIA', 'splice');//?
    //accesores
    contenido = contenido.replaceAll('UNE', 'join');
    contenido = contenido.replaceAll('SUBARRAY', 'slice');//?
    //de repeticion
    contenido = contenido.replaceAll('FILTRA', 'filter');
    contenido = contenido.replaceAll('paraCada', 'forEach');

    //* objeto math
    contenido = contenido.replaceAll('PI', 'Math.PI');
    contenido = contenido.replaceAll('raizCuadrada', 'Math.sqrt');
    contenido = contenido.replaceAll('raizCubica', 'Math.cbrt');
    contenido = contenido.replaceAll('MAXIMO', 'Math.max');
    contenido = contenido.replaceAll('MINIMO', 'Math.min');
    contenido = contenido.replaceAll('POTENCIA', 'Math.pow');
    contenido = contenido.replaceAll('REDONDEA', 'Math.round');
    contenido = contenido.replaceAll('aEntero', 'Math.floor');
    contenido = contenido.replaceAll('ALEATORIO', 'Math.random');
    contenido = contenido.replaceAll('eliminaDecimales', 'Math.trunc');
    contenido = contenido.replaceAll('ABSOLUTO', 'Math.abs');
    //* DOM
    contenido = contenido.replaceAll('documento', 'document');
    //seleccion de elementos
    contenido = contenido.replaceAll('obtenElementoPorId', 'getElementById');
    contenido = contenido.replaceAll('obtenElementoPorClase', 'getElementsByClassName');
    contenido = contenido.replaceAll('obtenElementoPorTag', 'getElementsByTagName');
    contenido = contenido.replaceAll('obtenElementoPorNombre', 'getElementsByName');
    contenido = contenido.replaceAll('obtenElemento', 'querySelector');
    contenido = contenido.replaceAll('obtenElementos', 'querySelectorAll');
    contenido = contenido.replaceAll('obtenAtributo', 'getAttribute');
    contenido = contenido.replaceAll('asignaAtributo', 'setAttribute');
    contenido = contenido.replaceAll('eliminaAtributo', 'removeAttribute');
    //clases
    contenido = contenido.replaceAll('añadeClase', 'classList.add');
    contenido = contenido.replaceAll('quitaClase', 'classList.remove');
    contenido = contenido.replaceAll('alternaClase', 'classList.toggle');
    contenido = contenido.replaceAll('tieneClase', 'classList.contains');
    contenido = contenido.replaceAll('obtenClase', 'classList.item');
    contenido = contenido.replaceAll('contieneClase', 'classList.contains');
    contenido = contenido.replaceAll('reemplazaClase', 'classList.replace');
    //obtencion de elementos
    contenido = contenido.replaceAll('contenidoDelTexto', 'textContent');
    contenido = contenido.replaceAll('contenidoHtml', 'innerHTML');
    //creacion de elementos
    contenido = contenido.replaceAll('creaElemento', 'createElement');
    contenido = contenido.replaceAll('creaTexto', 'createTextNode');
    //metodos de hijos
    contenido = contenido.replaceAll('primerHijo', 'firstChild');
    contenido = contenido.replaceAll('ultimoHijo', 'lastChild');
    contenido = contenido.replaceAll('primerElementoHijo', 'firstElementChild');
    contenido = contenido.replaceAll('ultimoElementoHijo', 'lastElementChild');

    contenido = contenido.replaceAll('añadeHijo', 'appendChild');
    contenido = contenido.replaceAll('quitaHijo', 'removeChild');
    contenido = contenido.replaceAll('reemplazaHijo', 'replaceChild');
    contenido = contenido.replaceAll('tieneHijos', 'hasChildNodes');
    //metodos de padres
    contenido = contenido.replaceAll('PADRE', 'parentNode');
    contenido = contenido.replaceAll('elementoPadre', 'parentElement');
    //propiedades de silbings
    contenido = contenido.replaceAll('hermanoSiguiente', 'nextSibling');
    contenido = contenido.replaceAll('hermanoAnterior', 'previousSibling');
    contenido = contenido.replaceAll('siguienteElemento', 'nextElementSibling');
    contenido = contenido.replaceAll('anteriorElemento', 'previousElementSibling');

    //* eventos
    contenido = contenido.replaceAll('anadeEvento', 'addEventListener');
    contenido = contenido.replaceAll('quitaEvento', 'removeEventListener');




    //* tipos de datos
    contenido = contenido.replaceAll('#numero', 'number');
    contenido = contenido.replaceAll('#cadena', 'string');
    contenido = contenido.replaceAll('#booleano', 'boolean');
    contenido = contenido.replaceAll('#objeto', 'object');
    contenido = contenido.replaceAll('#nulo', 'null');
    contenido = contenido.replaceAll('#indefinido', 'undefined');
    contenido = contenido.replaceAll('#enterogrande', 'bigint');
    contenido = contenido.replaceAll('#simbolo', 'symbol');
    contenido = contenido.replaceAll('#funcion', 'function');

    contenido = contenido.replaceAll('FALSO', 'false');
    contenido = contenido.replaceAll('CIERTO', 'true');

    //* otros
    contenido = contenido.replaceAll('VALOR', 'value');
    contenido = contenido.replaceAll('tipoDe', 'typeof');
    contenido = contenido.replaceAll('NUEVO', 'new');
    contenido = contenido.replaceAll('NULO', 'null');
    contenido = contenido.replaceAll('HECHO', 'done');
    contenido = contenido.replaceAll('EVALUA', 'eval');
    contenido = contenido.replaceAll('esNUN', 'isNaN');
    contenido = contenido.replaceAll('esFinito', 'isFinite');
    contenido = contenido.replaceAll('NuN', 'NaN');
    /*                                                       */
    fs.writeFileSync(nombre, contenido)
}
module.exports={
    'traduce': traduce
}