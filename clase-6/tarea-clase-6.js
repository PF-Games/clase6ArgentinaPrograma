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
    $label.textContent = 'Ingresar la edad del integrante ';
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

document.querySelector('#calcular').onclick = function(event) {
    calcularEdades();
    event.preventDefault();
};


function calcularEdades(){
    const edades = obtenerEdades();
    mostarMayorEdad(edades);
    mostarMenorEdad(edades);
    mostrarPromedioEdad(edades);

}

function obtenerEdades(){
    const edades = [];
    const inputs = document.querySelectorAll('#integrantes input')

    for (let i = 0; i < inputs.length; i++){
        edades.push(Number(inputs[i].value))
    }
    return edades;
}

function mostarMayorEdad(edades){
    const mayorEdad = Math.max(...edades);
    let mensaje = document.createElement('p');
    mensaje.textContent = 'La mayor edad es ' + mayorEdad;
    document.body.appendChild(mensaje);
}

function mostarMenorEdad(edades){
    const menorEdad = Math.min(...edades);
    let mensaje = document.createElement('p');
    mensaje.textContent = 'La menor edad es ' + menorEdad;
    document.body.appendChild(mensaje);
}


function mostrarPromedioEdad(edadTotal, cantidadIntegrantes){
    let promedio = calcularPromedio(edadTotal, cantidadIntegrantes);
    let mensaje = document.createElement('p'); 
    mensaje.textContent = 'El promedio de edad es ' + promedio;
    document.body.appendChild(mensaje);
}


//tomada de tarea algoritmos
function calcularPromedio(edadTotal, cantidadIntegrantes){
    let promedio = edadTotal/cantidadIntegrantes
    return promedio;
  }
  
  function calcularPromedioDeArray(edades){
      const suma = calcularSumaDeArray(edades);
      return calcularPromedio(suma, numeros.length);
      
  }    

  function mostrarResultado(mensaje) {
    const $resultados = document.querySelector('#resultados');
    $resultados.innerHTML = '';
    $resultados.appendChild(mensaje);
  }

  function deshabilitarBoton() {
    var boton = document.getElementById("enviar");
    boton.disabled = true
}

