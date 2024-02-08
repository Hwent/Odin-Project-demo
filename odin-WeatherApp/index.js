const city = document.querySelector(".city");
const searchbtn = document.querySelector(".searchbtn");
const display = document.querySelector(".weatherbox");

searchbtn.addEventListener("click", async () => {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=3169c8d63eac43aa94c205619240702&q=${city.value}&aqi=no`,
      { mode: "cors" }
    );
    const data = await response.json();
    const weather = document.createElement("div");
    weather.innerHTML = `
    <h2>${data.location.name}, ${data.location.country}</h2>
    <h4>Local: ${data.location.localtime}</h4>
    <p>Temperature: ${data.current.temp_c}°C</p>
    <div>
      <img src="${data.current.condition.icon}" alt="${data.current.condition.text}">
    </div>
    `;
    display.innerHTML = "";
    display.appendChild(weather);
  } catch (error) {
    display.textContent = error;
  }
});
