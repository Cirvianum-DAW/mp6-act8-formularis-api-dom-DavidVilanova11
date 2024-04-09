document
    .getElementById('login')
    .addEventListener('submit', (e)=> {
        e.preventDefault();
        // Obtenir les dades del formulari
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        login(email, password);
    }
);