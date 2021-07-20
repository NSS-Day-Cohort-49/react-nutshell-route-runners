import './EventCard.js'
import { settings } from '../Settings.js'


export let weather = []

export const getWeather = (event) => {
    const weatherFetchCall = `http://api.openweathermap.org/data/2.5/weather?lat=${event.location}&appid=${settings.weatherKey}&units=imperial`
    // fucntion to find object and pass in object, extract lat and lon (And id) 
    
    return fetch(weatherFetchCall)
        .then(response => response.json())
            .then(parsedWeather => {
                console.log("Weather Data Check", parsedWeather)
                weather = parsedWeather.list
            })
}

export const useWeather = () => {
    return weather.slice()
}