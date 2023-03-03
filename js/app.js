// evento que cargue todo el html
document.addEventListener('DOMContentLoaded', () => {
  // Seleccionar los elementos de la interfaz
  const inputEmail = document.querySelector('#email');
  const inputAsunto = document.querySelector('#asunto');
  const inputMensaje = document.querySelector('#mensaje');

  // Asignar eventos

  // se ejecuta al abandonar un campo
  inputEmail.addEventListener('blur', validar); //se llama hasta que suceda evento
  inputAsunto.addEventListener('blur', validar);
  inputMensaje.addEventListener('blur', validar);

  // funciones
  function validar(evento) {
    if (evento.target.value.trim() == '') {
      mostrarAlerta();
    } else {
      console.log('esta llleno');
    }
  }

  function mostrarAlerta() {
    // Generar un alerta en HTML

    const error = document.createElement('P');
    error.textContent = 'Hubo un error...';

    console.log(error);
  }
});
