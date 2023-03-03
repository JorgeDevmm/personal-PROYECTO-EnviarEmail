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
    console.log(evento.target.value);
  }
});
