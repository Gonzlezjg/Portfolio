const nombre = document.querySelector('#name');
const email = document.querySelector('#email');
const subject = document.querySelector('#subject');
const texto = document.querySelector('#texto');
const validacion = document.querySelector('#validacion')

const formulario = document.getElementById('contact-form');
window.onload = function() {
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        // this.contact_asunto.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps

        if ( nombre.value === '' || email.value === '' || subject.value === '' || texto.value === '' ) {
            validacion.classList.add('alert-danger', 'border', 'p-2', 'd-block');

            validacion.textContent = 'Todos los campos son obligatorios'
            setTimeout(() => {
                validacion.classList.add('d-none')
            }, 3000);
            return;
        } else {
            emailjs.sendForm('contact_service', 'contact_form', this)
                    .then(function() {
                        swal({
                            title: "¡Mensaje Enviado!",
                            icon: "success",
                            button: "Ok",
                          });
                          formulario.reset();  
                    }, function(error) {
                        validacion.classList.add('alert-warning', 'border', 'p-2', 'd-block');

                        validacion.innerHTML = `Ha ocurrido un error ${error}`;

                        setTimeout(() => {
                            validacion.classList.add('d-none')
                        }, 3000);
                    });
        }
        
    });
}
