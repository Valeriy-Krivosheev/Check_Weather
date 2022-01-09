const select = document.getElementById('select')
select.addEventListener('change',
   function loadWeather() {
      const city = this.value;
      document.querySelector('#title').classList.remove('animate__heartBeat') // for animation
      document.querySelector('#img').classList.remove('animate__bounce') // for animation
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=520b51f4fad9f9af0a446c3a7360a7c5`)
         .then(function (resp) { return resp.json() })
         .then(function (data) {
            document.querySelector('#title').textContent = data.name
            document.querySelector('#temp').innerHTML = Math.round((data.main.temp - 273.15)) + '&deg'
            document.querySelector('#temp-feels').innerHTML = 'Feels like: ' + Math.round((data.main.feels_like - 273.15)) + '&deg'
            document.querySelector('#clouds').textContent = data.weather[0].description
            document.querySelector('#img').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`
            document.querySelector('#title').classList.add('animate__heartBeat') // animation
            document.querySelector('#img').classList.add('animate__bounce') // animation
         })
         .catch(function () {
         });
   })







