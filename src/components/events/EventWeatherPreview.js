import { Weather } from './EventWeather.js'
import { useWeather } from './EventWeatherProvider.js'


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

