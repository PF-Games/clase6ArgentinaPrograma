/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente,
borrando los inputs ya creados (investigar cómo en MDN).
*/

document.querySelector('#enviar').onclickk = function(evento){
    const $cantidadIntegrantes = document.querySelector('#cantidad')
    const cantidadIntegrantes = Number($cantidadIntegrantes.value);

    borrarIntegrantesAnteriores();
    crearIntegrantes(cantidadIntegrantes);

    event.preventDefault();
};

function crearIntegrantes(cantidadIntegrantes){
    while (cantidadIntegrantes > 0)
        crearUnIntegrante();
        cantidadIntegrantes --; 
}

function crearUnIntegrante{
    const $div = document.createElement('div');
    $div.className = 'integrante';
  
    const $label = document.createElement('label');
    $label.textContent = 'Edad del integrante #: ' + (indice + 1);
    const $input = document.createElement('input');
    $input.type = 'number';
  
    $div.appendChild($label);
    $div.appendChild($input);
  
    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild($div);
}

function crearInputs(){

    }

function resetear(){

}

function calcularEdades(){
    mostarMayorEdad();
    mostarMenorEdad();
    mostrarPromedioEdad();
}

function mostarMayorEdad(){

}

function mostarMenorEdad(){

}

function mostrarPromedioEdad(){

}



