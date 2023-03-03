// evento que cargue todo el html
document.addEventListener('DOMContentLoaded', () => {
  // Seleccionar los elementos de la interfaz
  const inputEmail = document.querySelector('#email');
  const inputAsunto = document.querySelector('#asunto');
  const inputMensaje = document.querySelector('#mensaje');
  const formulario = document.querySelector('#formulario');

  // Asignar eventos

  // se ejecuta al abandonar un campo
  inputEmail.addEventListener('blur', validar); //se llama hasta que suceda evento
  inputAsunto.addEventListener('blur', validar);
  inputMensaje.addEventListener('blur', validar);

  // funciones
  function validar(evento) {
    // referencia del elemento div del evento id
    const referenciaDiv = evento.target.parentElement;

    if (evento.target.value.trim() == '') {
      mostrarAlerta(
        `El Campo ${evento.target.id} es obligatorio`,
        referenciaDiv
      );
      return;
    }

    limpiarAlerta(referenciaDiv);
  }

  function mostrarAlerta(mensaje, referenciaDiv) {
    limpiarAlerta(referenciaDiv);

    // Generar un alerta en HTML
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

    // Inyectar el error al formulario
    referenciaDiv.appendChild(error);
  }

  function limpiarAlerta(referenciaDiv) {
    // Comprueba si ya existe una alerta
    const alerta = referenciaDiv.querySelector('.bg-red-600');

    // si existe remueve la clase de referencia
    if (alerta) {
      alerta.remove();
    }
  }
});
