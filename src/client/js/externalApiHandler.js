/* Global Variables */

const apiKey = '&appid=b3db9c5c356432b99db4611f7c6299f8';
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
let zip = '';
let userResponse = '';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

export function handleExternalAPI(event) {
    event.preventDefault()

    // check what text was put into the form field
    zip = document.getElementById('name').value
    //Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch(baseURL + zip + ',us' + apiKey + '&units=imperial')
    .then(res => res.json())
    .then(function(res) {
        try {
            console.log("Main Temp: ", res.main.temp);
            document.getElementById('results').innerHTML = "Temperatur at zip: " + zip + " is " + res.main.temp + " F"
        } catch(error) {
            console.log('error', error)
        }
    })
}