

export const Weather = (weatherObj) => {
    
    return `
    <div class="weather__card">
        <h4 class="dayOfTheWeek">${weatherObj.dt_txt}</h4>
        <div><img class="weather__icon" src="http://openweathermap.org/img/w/${weatherObj.weather[0].icon}.png"></div>
        <div class="weather__temp">Min: ${weatherObj.main.temp_min}° / Max: ${weatherObj.main.temp_max}°</div>
        <div class="weather__forecast">${weatherObj.weather[0].description}</div>
    </div>
    `
}
