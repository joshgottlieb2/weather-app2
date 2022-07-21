let citySearchForm = document.getElementById('citySearch')

citySearchForm.addEventListener('submit', (event) => {
    event.preventDefault()

    let formData = new FormData(citySearchForm)
    let cityId = formData.get('cityId')


const fetchWeatherData = async () => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityId}&${API_KEY}`)
        let data = await response.json()
        // HANDLE DATA
        console.log(data)
        displayResults(data)
    } catch (err) {
        console.error(err)
        console.error("Hey something went wrong")
    } finally {
        console.log('THE REQUEST HAS FINISHED')
    }
}
    fetchWeatherData()    
})



let insertEl = document.getElementById('insert')

function displayResults(forecast) {
    let cityName = forecast['name']
    let highTemp = forecast['main']['temp_max']
    let lowTemp = forecast['main']['temp_min']
    let lowTempInt = Math.floor(lowTemp)
    let highTempInt = Math.floor(highTemp)
    let cast = forecast['weather'][0]['description']
    let humidity = forecast['main']['humidity'] 



    let insertHTML = `
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">City: ${cityName}</h4>
            </div>
        </div>
        <div class="card mt-4">
            <div class="card-body" id="insert" name="insert">
                <h4 class="card-title">High Temperature(Celcius): ${highTempInt-273}</h4>
            </div>
        </div>
        <div class="card mt-4">
            <div class="card-body" id="insert" name="insert">
                <h4 class="card-title">Low Temperature(Celsius): ${lowTempInt-273}</h4>
            </div>
        </div>
        <div class="card mt-4">
            <div class="card-body" id="insert" name="insert">
                <h4 class="card-title">Forecast: ${cast}</h4>
            </div>
        </div>
        <div class="card mt-4">
            <div class="card-body" id="insert" name="insert">
                <h4 class="card-title">Humidity: ${humidity}%</h4>
            </div>
        
    `
    insertEl.innerHTML = insertHTML
}   