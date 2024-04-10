document.addEventListener('DOMContentLoaded', (event) => {
    document
        .getElementById('login')
        .addEventListener('submit', (e)=> {
            e.preventDefault();
            // Get form data
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const dataNaixement = document.getElementById('dataNaixement').value;
            const termsAccepted = document.getElementById('terms').checked;

            // Form field validation

            // Check that they are filled
            if (!email || !password) {
                alert('You must fill all fields');
                return;
            }

            if (!termsAccepted) {
                alert('You must accept the terms and conditions');
                return;
            }

            // Password must be at least 6 characters long
            if (password.length < 6) {
                alert('The password must be at least 6 characters long');
                return;
            }

            // Email must be in a valid format
            const emailRegex = /^[a-zA-Z0-9._-]+@cirvianum\.[a-zA-Z]{2,6}$/;
            if (!emailRegex.test(email)) {
                alert('The email is not valid');
                return;
            }

            const today = new Date();
            const birthDate = new Date(dataNaixement);

            //login(email, password);
        }
    );
});