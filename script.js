const apiKey = "be3dbfba71d9111b2605d1ee79a42837";

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const weatherInfo = document.getElementById("weatherInfo");

  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        const weatherData = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
          <p><strong>Condition:</strong> ${data.weather[0].main}</p>
          <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
          <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        `;
        weatherInfo.innerHTML = weatherData;
      } else {
        weatherInfo.innerHTML = `<p>City not found. Try again!</p>`;
      }
    })
    .catch(error => {
      console.error("Error:", error);
      weatherInfo.innerHTML = `<p>Something went wrong. Please try again.</p>`;
    });
}
