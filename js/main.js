const form = document.querySelector('#form')
const input = document.querySelector('#input')
const submit = document.querySelector('#submit')
const list = document.querySelector('#list')


form.addEventListener('submit', (e) => {
   e.preventDefault()
   let inputVal = input.value.trim()
   const newItem = document.querySelector('#hidden').content.querySelector('.item').cloneNode(true)
   list.appendChild(newItem)
   const delBtns = newItem.querySelectorAll('.delete')
   newItem.querySelector('.cell-title').classList.remove('animate__heartBeat') // for animation
   newItem.querySelector('.cell-img').classList.remove('animate__bounce') // for animation
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=520b51f4fad9f9af0a446c3a7360a7c5`)
      .then(function (resp) { return resp.json() })
      .then(function (data) {
         newItem.querySelector('.cell-title').textContent = data.name
         newItem.querySelector('.cell-temp').innerHTML = Math.round((data.main.temp - 273.15)) + '&deg'
         newItem.querySelector('.cell-temp-feels').innerHTML = 'Feels like: ' + Math.round((data.main.feels_like - 273.15)) + '&deg'
         newItem.querySelector('.cell-clouds').textContent = data.weather[0].description
         newItem.querySelector('.cell-img').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`
         form.reset()
         newItem.querySelector('.cell-title').classList.add('animate__heartBeat') // animation
         newItem.querySelector('.cell-img').classList.add('animate__bounce') // animation
         for (let delBtn of delBtns) {
            delBtn.addEventListener('click', () => {
               list.removeChild(newItem)
            })
         }
      })
      .catch(function () {
         list.removeChild(newItem)
         alert(`Чел.. введи город правильно... ${inputVal}`)
         form.reset()
      });
})








