const express = require('express');
const https = require('https');
const app = express();
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Kansas City, USA &appid=31418ac2a27d1015ea90a9875d08e464&units=imperial';

app.get('/', function (req, res){
    https.get(url, function(responce){
        console.log(responce.statusCode);
        responce.on("data", (data) => {
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            var temp = weatherData.main.temp;
            var status = weatherData.weather[0].main;
            console.log(`The temperature is currently ${temp} and it is ${status}`);
        })
    })
    res.send("Server is up and running");
});



app.listen(3000, function (param) {  
    console.log('server is running on port 3000');
})