document.addEventListener("DOMContentLoaded", function () {
    // Static values for temperature and wind speed
    const temperature = 25; // in °C
    const windSpeed = 10; // in km/h

    // Function to convert Celsius to Fahrenheit
    function celsiusToFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    // Function to convert Fahrenheit to Celsius
    function fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    // Function to calculate wind chill factor
    function calculateWindChill(temp, wind) {
        const temperatureFahrenheit = celsiusToFahrenheit(temp);
        const windMph = wind * 0.621371;
        const windChillFahrenheit = 35.74 + (0.6215 * temperatureFahrenheit) - (35.75 * Math.pow(windMph, 0.16)) + (0.4275 * temperatureFahrenheit * Math.pow(windMph, 0.16));
        return fahrenheitToCelsius(windChillFahrenheit);
    }

    // Function to determine if wind chill calculation is applicable
    function isWindChillApplicable(temp, wind) {
        return temp <= 10 && wind > 4.8;
    }

    // Display wind chill factor
    const windChillElement = document.createElement("tr");
    const windChillLabel = document.createElement("td");
    windChillLabel.className = "label";
    windChillLabel.innerHTML = "<b>Wind Chill:</b>";
    const windChillValue = document.createElement("td");
    if (isWindChillApplicable(temperature, windSpeed)) {
        const windChill = calculateWindChill(temperature, windSpeed).toFixed(2);
        windChillValue.textContent = `${windChill} °C`;
    } else {
        windChillValue.textContent = "N/A";
    }
    windChillElement.appendChild(windChillLabel);
    windChillElement.appendChild(windChillValue);
    document.querySelector(".weather table").appendChild(windChillElement);
});






// Footer information
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;
const copyrightYearElement = document.getElementById('currentyear');
const lastModifiedElement = document.getElementById('lastModified');
copyrightYearElement.textContent = currentYear;
lastModifiedElement.textContent = `Last update: ${lastModified}`;
