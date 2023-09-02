var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility')
var wind = document.querySelector('.wind')
var sun = document.querySelector('.sun')
var search = document.querySelector('.search')


async function changeWeather(){
    search.value.trim()

    let apiULR = 'https://api.openweathermap.org/data/2.5/weather?q=ha noi&appid=bf2af3ddf146cdd744c49932b34014af'

    let data = await fetch(apiULR).then(res=> res.json())
    console.log(data)

}