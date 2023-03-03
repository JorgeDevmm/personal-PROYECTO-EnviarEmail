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
    if (evento.target.value.trim() == '') {
      mostrarAlerta(`El Campo ${evento.target.id} es obligatorio`);
    } else {
      console.log('esta llleno');
    }
  }

  function mostrarAlerta(mensaje) {
    // Generar un alerta en HTML
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

    // Inyectar el error al formulario
    formulario.appendChild(error);
  }
});
