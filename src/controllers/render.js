

const information = document.getElementById('info');
let estado = '*';

const aceptar = document.getElementById('aceptar');
aceptar.disabled=true;
aceptar.style.backgroundColor = '#646864';
aceptar.style.color = '#888b88';



const Ping = async () => {
  response = await window.versions.ping();
  return response
}

async function updateEstado() {
  estado = await Ping();
  information.innerText = `This app is using Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()}), and Electron (v${window.versions.electron()}), ${estado}`
}

updateEstado();

const setButton = document.querySelectorAll('input[type="button"]');
setButton.forEach(button => {
  button.addEventListener('click', () => {
    if (button.value === 'SYNC') {
      abrirVentanaForce();
    } else if (button.value === 'PORT') {
      console.log('port');
    } else if (button.value === 'TYPE BD') {
      console.log('type bd');
    } else if (button.value === 'MODELS') {
      console.log('models');
    } else if (button.value === 'RELATIONS') {
      console.log('relations');
    } else if (button.value === 'ACEPTAR') {
      console.log('aceptar');
    }
  });
});

      var ventanaAbierta = null;

      function abrirVentanaForce() {
        // Verificar si la ventana ya está abierta
        if (ventanaAbierta && !ventanaAbierta.closed) {
          ventanaAbierta.focus(); // Si está abierta, enfocarla
        } else {
          window.abrirForce.abrir();
         
        }
      }

