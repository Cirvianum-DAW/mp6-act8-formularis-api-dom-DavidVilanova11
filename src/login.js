document.addEventListener('DOMContentLoaded', (event) => {
    document
        .getElementById('login')
        .addEventListener('submit', (e)=> {
            e.preventDefault();
            // Get form data
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const dataNaixement = document.getElementById('dataNaixement').value;
            const dniNumber = document.getElementById('idNumber').value;
            const termsAccepted = document.getElementById('terms').checked;

            // Form field validation

            // Check that they are filled
            if (!email || !password || !dataNaixement || !dniNumber) {
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
            const age = today.getFullYear() - birthDate.getFullYear();

            // 1 any a milisegons(formula)
            // 1 any = 365 dies * 24 hores * 60 minuts * 60 segons * 1000 milisegons  
            // teniendo en cuenta los bisiestos necesitamos un 365,25
            // 1 any = 365,25 dies * 24 hores * 60 minuts * 60 segons * 1000 milisegonsqqqqqqqq     

            //login(email, password);
            if (age < 18) {
                alert('You must be at least 18 years old');
                return;
            }

            const dniRegex = /^[0-9]{8}[A-Z]$/;
            if (!dniRegex.test(dniNumber)) {
                alert('The DNI is not valid');
                return;
            }   

            // Send data to the server
            
            const formData = {
                email,
                password,
                dataNaixement,
                dniNumber,
            };

            sessionStorage.setItem('formData', JSON.stringify(formData));

            const storedFormData = JSON.parse(sessionStorage.getItem('formData'));
            console.log(storedFormData);

            // podem veure les dades que hem guardat a la consola (applicació, storage, session storage, file://)

             window.location.href = 'meteo.html';

            }

        );
}
);