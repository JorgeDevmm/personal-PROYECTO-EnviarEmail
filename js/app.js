// evento que cargue todo el html
document.addEventListener('DOMContentLoaded', () => {
  // objeto onde llenaremos la inforamción
  const email = {
    email: '',
    asunto: '',
    mensaje: '',
  };

  // Seleccionar los elementos de la interfaz
  const inputEmail = document.querySelector('#email');
  const inputCC = document.querySelector('#cc');
  const inputAsunto = document.querySelector('#asunto');
  const inputMensaje = document.querySelector('#mensaje');
  const formulario = document.querySelector('#formulario');
  const btnSubmit = document.querySelector("#formulario button[type='submit']");
  const btnReset = document.querySelector("#formulario button[type='reset']");
  const spinner = document.querySelector('#spinner');

  // Asignar eventos

  // se ejecuta al abandonar un campo (blur)(input)tiempo real
  inputEmail.addEventListener('input', validar); //se llama hasta que suceda evento
  inputCC.addEventListener('input', validar); //se llama hasta que suceda evento
  inputAsunto.addEventListener('input', validar);
  inputMensaje.addEventListener('input', validar);

  formulario.addEventListener('submit', enviarEmail); //al enviar

  btnReset.addEventListener('click', (evento) => {
    evento.preventDefault();

    // Reiniciar el objeto
    resetFormulario();
  });

  // funciones

  function enviarEmail(evento) {
    evento.preventDefault();

    spinner.classList.add('flex');
    spinner.classList.remove('hidden');

    // pasar un determinado tiempo y si invierte
    setTimeout(() => {
      spinner.classList.remove('flex');
      spinner.classList.add('hidden');

      // Reiniciar el objeto
      resetFormulario();

      // Crear una alerta
      const alertaExito = document.createElement('P');
      alertaExito.classList.add(
        'bg-green-500',
        'text-white',
        'p-2',
        'text-center',
        'rounded-lg',
        'mt-10',
        'font-bold',
        'text-sm',
        'uppercase'
      );
      alertaExito.textContent = 'Mensaje enviado correctamente';
      // agregando al formulario
      formulario.appendChild(alertaExito);

      setTimeout(() => {
        alertaExito.remove();
      }, 3000);
    }, 3000);
  }

  function validar(evento) {
    // referencia del elemento div del evento id
    const referenciaDiv = evento.target.parentElement;

    if (evento.target.value.trim() == '' && !evento.target.id == 'cc') {
      mostrarAlerta(
        `El Campo ${evento.target.id} es obligatorio`,
        referenciaDiv
      );
      email[evento.target.name] = ''; //vaciar propiedad
      comprobarEmail();
      return;
    }

    // si es el evento con id cc y esta vacio limpiamos la alerta
    if (evento.target.value.trim() == '' && evento.target.id == 'cc') {
      limpiarAlerta(referenciaDiv);
      return;
    }

    // validamos tanto el id del evento y que la función devuelva false
    // enviamos el valor del inpunt del evento seleccionado
    if (evento.target.id === 'email' && !validarEmail(evento.target.value)) {
      mostrarAlerta(`El email no es valido`, evento.target.parentElement);
      email[evento.target.name] = ''; //vaciar propiedad
      comprobarEmail();
      return;
    }

    // agregamos nuevo campo cc
    if (evento.target.id === 'cc' && !validarEmail(evento.target.value)) {
      mostrarAlerta(`El cc no es valido`, evento.target.parentElement);
      comprobarEmail();
      return;
    }

    limpiarAlerta(referenciaDiv);

    // Asignar los valores en el objeto con los valores del evento
    email[evento.target.name] = evento.target.value.trim().toLowerCase();

    // Comprobar el objeto de email
    comprobarEmail();
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

  function validarEmail(email) {
    // expresión regular
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email); //devuelve true o false

    return resultado;
  }

  function comprobarEmail() {
    // validar los valores del objeto en un nuevo arreglo, y que incluya un "" que devuelva true, o false si no tiene ningun ""
    if (Object.values(email).includes('')) {
      //true
      btnSubmit.classList.add('opacity-50');
      btnSubmit.disabled = true;

      return;
    }
    btnSubmit.classList.remove('opacity-50');
    btnSubmit.disabled = false;
  }

  function resetFormulario() {
    // Reiniciar el objeto
    email.email = '';
    email.asunto = '';
    email.mensaje = '';
    formulario.reset(); //resetea formulario, método propio
    comprobarEmail();
  }
});
