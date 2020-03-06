const meteo = function() {
  let pays = document.querySelector(".data-pays").value;
  const ville = document.querySelector(".data-ville").value;
  if (pays == "France") {
    pays = "fr";
  } else if (pays == "Royaume Unis") {
    pays = "uk";
  } else if (pays == "Etats Unis") {
    pays = "us";
  }
  const apiMeteo = `http://api.openweathermap.org/data/2.5/weather?q=${ville},${pays}&APPID=9aa3234ea6d085cae45d5dd5079a206a`;
  fetch(apiMeteo)
    .then(response => response.json())
    .then(data => {
      const elementParagraphe = document.querySelectorAll(".data-p");
      elementParagraphe[0].innerHTML = `${elementParagraphe[0].innerHTML} ${data.name}`;
      elementParagraphe[1].innerHTML = `${elementParagraphe[1].innerHTML} ${data.weather[0].main}`;
      elementParagraphe[2].innerHTML = `${elementParagraphe[2].innerHTML} ${data.weather[0].description}`;
      elementParagraphe[3].innerHTML = `${elementParagraphe[3].innerHTML} ${data
        .main.temp - 273.5}°C`;
      elementParagraphe[4].innerHTML = `${elementParagraphe[4].innerHTML} ${data.wind.speed}m/s`;
      console.dir(data);
    });
};

const button = document.querySelector(".data-button");
button.addEventListener("click", meteo);
