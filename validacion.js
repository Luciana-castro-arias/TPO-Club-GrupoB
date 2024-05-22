
const validacionFormulario = (my_formulario) => {
    const listaInputs = document.querySelectorAll(`${my_formulario} [data-validate]`);
    console.log('listaInputs :>> ', listaInputs);
}

const enviarFormulario = () => {
	event.preventDefault();
	validacionFormulario(`#my_formulario`);
}


