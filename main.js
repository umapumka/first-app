function convertTemperature() {


    const celsiusInput = document.getElementById('celsiusInput').value;
    const ConvertForm = document.getElementById('ConvertForm').value;
    const convertTo = document.getElementById('convertTo').value;

    
    let result;

    if (ConvertForm === convertTo) {
        result = celsiusInput;
    } else if (ConvertForm === 'C' && convertTo === 'F') {
        result = (celsiusInput * 9/5) + 32;
    } else if (ConvertForm === 'F' && convertTo === 'C') {
        result = (celsiusInput - 32) * 5/9;
    }

    document.getElementById('showResult').innerText = `${parseFloat(result).toFixed(2)}°${convertTo}`;
}
