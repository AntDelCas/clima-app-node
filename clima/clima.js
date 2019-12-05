const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=da5cd1f0ab37de30d44dbd8936a6ce63&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}