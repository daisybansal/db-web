document.addEventListener('DOMContentLoaded', function() {
    // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
    var apiKey = '00eb53f7cd5b3fb2db9c119f749e4479';
    var city = 'Toronto'; // Replace with the desired city name

    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;

    fetch(apiUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // Extract relevant information from the API response
            var temperature = data.main.temp;
            var description = data.weather[0].description;

            // Update the weather div with the information
            document.getElementById('weather').innerHTML = '<p>Current Weather: ' + description + ', Temperature: ' + temperature + '°C</p>';
        })
        .catch(function(error) {
            console.error('Error fetching weather data:', error);
        });
});