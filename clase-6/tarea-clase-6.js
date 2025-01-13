/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente,
borrando los inputs ya creados (investigar cómo en MDN).
*/

document.querySelector('#enviar').onclick = function(event){
    const $cantidadIntegrantes = document.querySelector('#cantidad')
    const cantidadIntegrantes = Number($cantidadIntegrantes.value);

    crearIntegrantes(cantidadIntegrantes);
    deshabilitarBoton();

    event.preventDefault();
};

function crearIntegrantes(cantidadIntegrantes){
    while (cantidadIntegrantes > 0){
        crearUnIntegrante();
        cantidadIntegrantes = cantidadIntegrantes - 1; 
    }
}

function crearUnIntegrante(cantidadIntegrantes){
    const $div = document.createElement('div');
    $div.className = 'integrante';
  
    const $label = document.createElement('label');
    $label.textContent = 'Edad del integrante ';
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

function deshabilitarBoton() {
    var boton = document.getElementById("enviar");
    boton.disabled = true
}

//tomada de tarea algoritmos
function calcularPromedio(total, divisor){
    let promedio = total/divisor
    return promedio;
  }
  
  function calcularPromedioDeArray(numeros){
      const suma = calcularSumaDeArray(numeros);
      return calcularPromedio(suma, numeros.length);
      
  }    
