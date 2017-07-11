var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=59cd9c2178e9ea46d9ba9adb8503a396&units=imperial';

// 59cd9c2178e9ea46d9ba9adb8503a396

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(response) {
      // debugger;
      if(response.data.cod && response.data.message) {
        throw new Error(response.data.message);
      }else {
        return response.data.main.temp;
      }
    }, function(error) {
      // throw new Error(error.response.data.message);
      throw new Error('Unable to find weather for that location.')
    });
  }
}
