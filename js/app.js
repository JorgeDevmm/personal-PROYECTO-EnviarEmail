// evento que cargue todo el html
document.addEventListener('DOMContentLoaded', () => {
  // Seleccionar los elementos de la interfaz
  const inputEmail = document.querySelector('#email');
  const inputAsunto = document.querySelector('#asunto');
  const inputMensaje = document.querySelector('#mensaje');

  // Asignar eventos

  // se ejecuta al abandonar un campo
  inputEmail.addEventListener('blur', (evento) => {
    console.log(evento.target.value);
  });
});
