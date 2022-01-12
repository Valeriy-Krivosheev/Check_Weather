const select = document.getElementById('select')
const cityArr = city_names.map(item => {
   let elem = document.createElement('option')
   select.append(elem)
   elem.append(item)
   return item
})

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
   });

function randomInteger(min, max) {
   let i = min + Math.random() * (max - min);
   return Math.round(i);
}


fetch("https://newsapi.org/v2/top-headlines?country=ru&apiKey=141e8550b034469e9801e652d3166b3b")
   .then(function (resp) { return resp.json() })
   .then(function (data) {
      const box = document.querySelector('#news')
      let randomNumber = randomInteger(0, 18)
      document.querySelector('#news__title').innerHTML = data.articles[`${randomNumber}`].title
      document.querySelector('#news__descr').innerHTML = data.articles[`${randomNumber}`].description
      let a = document.createElement('a');
      a.innerHTML = data.articles[`${randomNumber}`].url
      a.href = data.articles[`${randomNumber}`].url
      a.style.color = 'black'
      box.appendChild(a);

      const box2 = document.querySelector('#news2')
      let randomNumber2 = randomInteger(0, 18)
      console.log(randomNumber2);
      document.querySelector('#news__title2').innerHTML = data.articles[`${randomNumber2}`].title
      document.querySelector('#news__descr2').innerHTML = data.articles[`${randomNumber2}`].description
      let a2 = document.createElement('a');
      a2.innerHTML = data.articles[`${randomNumber2}`].url
      a2.href = data.articles[`${randomNumber2}`].url
      a2.style.color = 'black'
      box2.appendChild(a2);

      const box3 = document.querySelector('#news3')
      let randomNumber3 = randomInteger(0, 18)
      console.log(randomNumber3);
      document.querySelector('#news__title3').innerHTML = data.articles[`${randomNumber3}`].title
      document.querySelector('#news__descr3').innerHTML = data.articles[`${randomNumber3}`].description
      let a3 = document.createElement('a');
      a3.innerHTML = data.articles[`${randomNumber3}`].url
      a3.href = data.articles[`${randomNumber3}`].url
      a3.style.color = 'black'
      box3.appendChild(a3);
   })









