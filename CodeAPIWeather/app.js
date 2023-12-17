var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility')
var wind = document.querySelector('.wind')
var sun = document.querySelector('.sun')
var search = document.querySelector('.search')
var value = document.querySelector('.value')
var time = document.querySelector('.time')
var content = document.querySelector('.content')
var body = document.querySelector('body')

async function changeWeather(){
    let capitalSearch = search.value.trim()

    let apiULR = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=bf2af3ddf146cdd744c49932b34014af`

    let data = await fetch(apiULR).then(res=> res.json())
    if(data.cod == 200)
    {
        content.classList.remove('hide')
        city.innerText = data.name
        country.innerText = data.sys.country
        visibility.innerText = data.visibility + ' (m)'
        wind.innerText = data.wind.speed + ' (m/s)'
        sun.innerText = data.main.humidity + ' (%)'
        let temp = Math.round((data.main.temp -273.15))
        value.innerText = temp
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : ''
        time.innerText = new Date().toLocaleString('vi')

        body.setAttribute('class', 'warm')
        if(temp <= 25){
            body.setAttribute('class', 'hot')
        }

        if(temp <= 22){
            body.setAttribute('class', 'warm')
        }

        if(temp <= 19){
            body.setAttribute('class', 'cold')
        }

    }else{
        content.classList.add('hide')
    }
}

search.addEventListener('keypress', function(e){
    if(e.code == 'Enter'){
        changeWeather()
    }
})