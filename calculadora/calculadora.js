var pantalla = document.getElementById("pantalla");
function mostrar(valor) {
    pantalla.value += valor;
}
function limpiar() {
    pantalla.value = '';
}
function calcular() {
}

function mostrar(valor) {
    pantalla.value += valor;
}

function limpiar() {
    pantalla.value = '';
}

function calcular() {
    try {
        // Evalúa la expresión matemática
        pantalla.value = eval(pantalla.value);

        // Verifica el resultado y muestra un mensaje
        const resultado = parseFloat(pantalla.value); // Convierte el resultado a número
        if (resultado === 0) {
            alert("Su resultado es igual a 0.");
        } else if (resultado < 0) {
            alert("Su resultado es negativo.");
        } else {
            alert("Su resultado es positivo.");
        }
    } catch (error) {
        alert("Error en la expresión: " + error.message);
    }
}
// Función para calcular datos personales e IMC
function calcularDatos() {
    const nombre = document.getElementById("nombre").value;
    const cedula = document.getElementById("cedula").value;
    const edad = parseInt(document.getElementById("edad").value);
    const telefono = document.getElementById("telefono").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultadoFinal = document.getElementById("resultadoFinal");

    // Validar que todos los campos estén llenos
    if (!nombre || !cedula || isNaN(edad) || !telefono || isNaN(peso) || isNaN(altura)) {
        resultadoFinal.textContent = "Por favor, completa todos los campos correctamente.";
        return;
    }

    // Calcular IMC
    const imc = (peso / (altura * altura)).toFixed(2);

    // Determinar si es mayor o menor de edad
    const mayorDeEdad = edad >= 18 ? "mayor de edad" : "menor de edad";

  // Determinar el estado del peso
  let estadoPeso = "";
  if (imc < 18.5) {
      estadoPeso = "te falta peso. Deberías aumentar.";
  } else if (imc >= 18.5 && imc < 24.9) {
      estadoPeso = "estás en un peso saludable. ¡Sigue así!";
  } else if (imc >= 25) {
      estadoPeso = "necesitas adelgazar. Considera mejorar tu alimentación y hacer ejercicio.";
  }

  // Mostrar el resultado final
  resultadoFinal.textContent = `Hola ${nombre}, eres ${mayorDeEdad} con ${edad} años, tu índice de masa corporal es ${imc} y ${estadoPeso}`;
}

// Función para limpiar todos los campos
function limpiarCampos() {
  document.getElementById("nombre").value = '';
  document.getElementById("cedula").value = '';
  document.getElementById("edad").value = '';
  document.getElementById("telefono").value = '';
  document.getElementById("peso").value = '';
  document.getElementById("altura").value = '';
  document.getElementById("resultadoFinal").textContent = '';
}