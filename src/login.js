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

        
        login(email, password);
    }
);