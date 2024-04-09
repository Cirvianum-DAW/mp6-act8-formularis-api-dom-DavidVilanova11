document
    .getElementById('login')
    .addEventListener('submit', (e)=> {
        e.preventDefault();
        // Obtenir les dades del formulari
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const termsAccepted = document.getElementById('terms').checked;

        // Validació dels camps del formulari

        // Validar que estiguin omplerts
        if (!email || !password) {
            alert('Has d\'omplir tots els camps');
            return;
        }

        if (!termsAccepted) {
            alert('Has d\'acceptar els termes i condicions');
            return;
        }

        // La conretrassenya ha de tenir almenys 6 caràcters

        if (password.length < 6) {
            alert('La contrassenya ha de tenir almenys 6 caràcters');
            return;
        }

        // El correu ha de tenir un format vàlid
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            alert('El correu electrònic no és vàlid');
            return;
        }
        
        login(email, password);
    }
);