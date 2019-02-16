const argv = require('yargs').argv;

let apikey = 'a4baa0afa03998e0c181934c0472b681';
let city = argv.c || 'Seattle';
let request = require('request');
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;

request(url, function (err, response, body) {

    if (err) {
        console.log('error: ', error);
    } else {
        let weather = JSON.parse(body);
        let message = `The weather temperature is ${weather.main.temp} Celsius degrees in ${weather.name}`;
        console.log(message);
    }
});

