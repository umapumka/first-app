// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
   
    let form = document.getElementById('conversionForm');

   
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let celsius = parseFloat(document.getElementById('celsiusInput').value);
        let  convertTo = document.getElementById('convertTo').value;

        
        let  result;

        if (convertTo === 'fahrenheit') {
            result = celsiusToFahrenheit(celsius);
        }
        
        displayResult(result);
    });

    function celsiusToFahrenheit(celsius) {
        return celsius * 9/5 + 32;
    }

   
    function displayResult(result) {
        let showResultDiv = document.getElementsByClassName("convertSides");
        showResultDiv.innerHTML = ''; 



        let resultElement = document.createElement('p');
        resultElement.textContent = result.toFixed(2) + ' degrees Fahrenheit';
        showResultDiv.appendChild(resultElement);
    }
});
