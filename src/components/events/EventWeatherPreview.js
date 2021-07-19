import { Weather } from './EventWeather.js'
import { getWeather, useWeather } from './EventWeatherProvider.js'


const contentTarget = document.querySelector(".weather__container")

const render = (weatherArray) => {

    let weatherPreviewHTML = ""

    for (const weatherObj of weatherArray) {
    weatherPreviewHTML += Weather(weatherObj)

    contentTarget.innerHTML = `
        <h3>Five Day Weather Forecast</h3>
        <div class="daily__weather">
        ${weatherPreviewHTML}
        </div>`
    }
}

export const WeatherPreview = () => {
        const weatherArray = useWeather()
        render(weatherArray)
}

eventHub.addEventListener("coordinates", event =>{
    // console.log(event.detail.coordinates, "park chosen reaction")

    const weatherCoordinates = event.detail.coordinates
    // console.log(weatherCoordinates, "park object")
    getWeather(weatherCoordinates).then(() => {
        // console.log(weather, "weather data received")

        WeatherPreview()
    })
})
