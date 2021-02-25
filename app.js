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
            var icon = weatherData.weather[0].icon;
            imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`
            console.log(`The temperature is currently ${temp} and it is ${status}`);
            res.write('<head><meta charset="utf-8"></head>');
            res.write(`<h1>The current weather is ${status}</h1>`);
            res.write(`<img src="${imageURL}" />`);
            res.write(`<h2>The current temperature is ${temp}F</h2>`);
            res.send();            
        })
    })    
});



app.listen(3000, function (param) {  
    console.log('server is running on port 3000');
})