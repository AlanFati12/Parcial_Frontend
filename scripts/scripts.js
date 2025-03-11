console.log('Scripts file loaded');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    
    const loginForm = document.getElementById('loginForm');
    const registroForm = document.getElementById('registroForm');
    
    console.log('Login form exists:', !!loginForm);
    console.log('Registro form exists:', !!registroForm);
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log('Login form submitted');
            
            const usuario = document.getElementById('usuario').value;
            const clave = document.getElementById('clave').value;
            
            console.log('Usuario:', usuario);
            console.log('Clave:', clave);
            
            this.reset();
        });
    }
    
    if (registroForm) {
        registroForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log('Registro form submitted');
            
            try {
                const nombres = document.getElementById('nombres').value;
                const apellidos = document.getElementById('apellidos').value;
                const email = document.getElementById('email').value;
                const telefono = document.getElementById('telefono').value;
                const estrato = document.getElementById('estrato').value;
                const fechaNacimiento = document.getElementById('fechaNacimiento').value;
                const grupoSanguineo = document.getElementById('grupoSanguineo').value;
                
                const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
                console.log('Checkboxes selected:', checkboxes.length);
                
                const actividades = Array.from(checkboxes)
                    .map(checkbox => checkbox.value)
                    .join(', ');
                
                const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                
                if (!regexEmail.test(email)) {
                    alert("Correo inválido");
                    return;
                }
                
                const mensaje = `Datos Registrados:\nNombres: ${nombres}\nApellidos: ${apellidos}\nEmail: ${email}\nTeléfono: ${telefono}\nEstrato: ${estrato}\nFecha de Nacimiento: ${fechaNacimiento}\nGrupo Sanguíneo: ${grupoSanguineo}\nActividades Favoritas: ${actividades}`;
                
                console.log('Alert message:', mensaje);
                alert(mensaje);
                
                this.reset();
            } catch (error) {
                console.error('Error in form submission:', error);
                alert('Ocurrió un error al procesar el formulario. Ver consola para detalles.');
            }
        });
    }

    var loginBtn = document.getElementById("loginBtn");
    if (loginBtn) {
        loginBtn.addEventListener("click", function() {
            var usuario = document.getElementById("usuario").value;
            var password = document.getElementById("password").value;
            console.log("Log In:", "Usuario: " + usuario, "Contraseña: " + password);
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = document.getElementById('carouselExampleCaptions');
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 5000,
      wrap: true
    });
});

function alternarTexto() {
    const contenido = document.getElementById('contenido');
    if (contenido.innerText === 'Bienvenido a nuestra página. Aquí encontrarás información útil.') {
        contenido.innerText = '¡Gracias por visitar nuestra página! Esperamos que encuentres todo lo que necesitas.';
    } else {
        contenido.innerText = 'Bienvenido a nuestra página. Aquí encontrarás información útil.';
    }
}

function alternarColor() {
    const body = document.body;
    
    if (body.style.backgroundColor === '' || body.style.backgroundColor === 'white' || body.style.backgroundColor === 'rgb(255, 255, 255)') {
        body.style.backgroundColor = '#333366';
    } else if (body.style.backgroundColor === 'rgb(51, 51, 102)') {
        body.style.backgroundColor = '#336699';
    } else if (body.style.backgroundColor === 'rgb(51, 102, 153)') {
        body.style.backgroundColor = '#336633';
    } else if (body.style.backgroundColor === 'rgb(51, 102, 51)') {
        body.style.backgroundColor = '#993333';
    } else {
        body.style.backgroundColor = 'white';
    }
}