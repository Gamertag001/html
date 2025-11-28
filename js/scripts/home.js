document.querySelector('.container').innerHTML = `
  <h1>ejemplo del dom</h1>
  <p>this is the first parrafo.</p>
`;

function saludar(){
	alert('helloooo')
} 


let botoncambiar = document.getElementById('parrafo1');
	let parrafo = document.getElementById('parrafo2');
	botoncambiar.addEventListener('click', cambiartexto);

function cambiartexto() {
    parrafo.textContent = 'hey klk';
}




let boton = document.getElementById('btncambiar');
let miparrafo = document.getElementById('miparrafo');
boton.addEventListener('click', cambiartexto);
let estadotexto = true;
setInterval(cambiartexto, 2000);

function cambiartexto()	{
	if (estadotexto) {
		parrafo.textContent = 'primer texto';
	} else {
		parrafo.textContent = 'segundo texto';
	}

	estadotexto = !
	estadotexto;
}

