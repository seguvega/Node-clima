const axios = require('axios');

const getClima = async(ciudad, opc) => {
    const ciudadURL = encodeURI(ciudad);
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ ciudadURL}&appid=46f64d90f5e8e537bc27ccd0a83ef7a5&units=metric`); ///Se utiliza el await para esperar la respuesta
    //console.log(res);
    var temperatura = res.data.main.temp
    var resp = 0;
    if (opc == 'p') {
        resp = res.data.main.pressure;
    } else if (opc == 'h') {
        resp = res.data.main.humidity;
    } else {
        resp = "Opciones validas Humedad (h) o la Presion Atmosferica(p)"
    }
    const obj = {
        tem: temperatura,
        opcion: resp
    }
    return obj
};

module.exports = {
    getClima,
}