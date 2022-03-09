const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
const temperature = document.querySelector('#temperature')
const feelsLike = document.querySelector('#feels-like')
const placeName = document.querySelector('#location')

messageOne.textContent = ''

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    messageOne.textContent = 'Loading...'
    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = ''
                temperature.textContent = 'Temperature: ' + data.temperature
                feelsLike.textContent = 'Feels Like: ' + data.feelslike
                placeName.textContent = 'Location: ' + data.location

                console.log(data.temperature)
                console.log(data.feelslike)
                console.log(data.location)
            }
        })
    })
})
