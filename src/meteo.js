// Api Key from weatherapi.com = 4e1af933ab5445919eb155521242602

// 1. Heu de crear un formulari amb els següents camps:
//    - Ciutat: L'usuari ha de poder especificar el nom de la ciutat.
//    - Codi Postal: L'usuari ha de poder especificar el codi postal (opcional).
//    - País: L'usuari ha de poder especificar el nom del país.

// 2. Heu de realitzar les següents validacions dels camps del formulari:
//    - El camp del ciutat i codi postal són obligatoris. Heu de mostrar un missatge d'alerta si aquest camp està buit.

// 3. Heu de realitzar una petició a l'API de www.weatherapi.com utilitzant les dades proporcionades pel formulari per obtenir la informació meteorològica. L'API proporciona dades meteorològiques actuals i una previsió per al dia següent.

// 4. Heu de mostrar la informació obtinguda de l'API a la pàgina web. La informació a mostrar ha de incloure:
//    - Temperatura actual.
//    - Descripció del temps actual.
//    - Icona que representa les condicions meteorològiques actuals.
//    - Temperatura prevista per al dia següent.
//    - Descripció del temps previst per al dia següent.
//    - Icona que representa les condicions meteorològiques previstes per al dia següent.

// 5. Heu de gestionar els errors de la petició a l'API. Si hi ha algun error en la petició, heu de mostrar un missatge d'error a l'usuari.

// Començem amb el codi:

function getWeather() {
    const city = document.getElementById('city').value;
    const postalCode = document.getElementById('postalCode').value;
    const country = document.getElementById('country').value;

    if (city === '') {
        alert('The city field is required');
        return;
    }

    if (postalCode === '') {
        alert('The postal code field is required');
        return;
    }

    const apiKey = '4e1af933ab5445919eb155521242602';
    const currentUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&postal_code=${postalCode}&country=${country}`;
    const forecastUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&postal_code=${postalCode}&country=${country}`;
    

    // AMB PROMISE ALL
    // const [currentResponse, forecastResponse] = await Promise.all ([
    //     fetch(currentWeatherUr1),
    //     fetch(forecastUrl),
    //     ]);

    // const [currentData, forecastData] = await Promise.all([
    //     currentResponse.json(),
    //     forecastResponse.json(),
    //     ]);

    fetch(currentUrl)
        .then(response => response.json())
        .then(data => {
            const currentWeather = data.current;
    
            document.getElementById('currentTemperature').textContent = currentWeather.temp_c;
            document.getElementById('currentWeather').textContent = currentWeather.condition.text;
            document.getElementById('currentIcon').src = currentWeather.condition.icon;
        })
        .catch(error => {
            console.error(error);
        });
    
    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            const forecast = data.forecast.forecastday[0].day;
    
            document.getElementById('forecastTemperature').textContent = forecast.avgtemp_c;
            document.getElementById('forecastWeather').textContent = forecast.condition.text;
            document.getElementById('forecastIcon').src = forecast.condition.icon;
        })
        .catch(error => {
            console.error(error);
        });
}

document
.getElementById('weather')
addEventListener('submit', (e)=> {
    e.preventDefault();
    getWeather();
});