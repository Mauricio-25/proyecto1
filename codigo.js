
const modo = document.querySelector("#modoOscuro");

modo.addEventListener("click",()=>{
	const texto = document.querySelector(".texto");

	if (texto.classList.contains("texto")) {
		
			texto.style.color = "var(--modoOscuroTexto)";
			texto.style.backgroundColor = "var(--modoOscuroFondo)";
			texto.classList.toggle("cambiarModo");
			texto.classList.toggle("texto");
		
		
	} else {
		texto.style.color = "var(--modoClaroTexto)";
		texto.style.backgroundColor = "var(--modoClaroFondo)";
		texto.classList.toggle("texto");
		texto.classList.toggle("cambiarModo");
	}
	

});