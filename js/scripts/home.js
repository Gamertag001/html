document.querySelector('.container').innerHTML = `
  <h1>ejemplo del dom</h1>
  <p>this is the first parrafo.</p>
`;

function saludar(){
	alert('helloooo')
} 

let boton = document.getElementById('btnprincipal');
		boton.addEventListener('click', respuestaClick)
		function respuestaClick(){
			console.log('respuesta evento');
		}


