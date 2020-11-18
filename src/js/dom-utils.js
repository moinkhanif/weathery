const utils = {
  removeAllChildNodes: (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  },
  options: ({ instantPlace = {}, place = {} }) => ({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ instantPlace, place }),
  }),
  createLi: (node, message) => {
    const li = node.appendChild(document.createElement('li'));
    li.innerHTML = message;
    return li;
  },
  convertToFahrenheit: (val) => Math.round(((val * 1.8) + 32) * 10) / 10,
  showWeatherDetails: (weatherDiv, weatherDetails) => {
    weatherDiv.classList.remove('loader');
    if (weatherDetails.message) {
      const error = weatherDiv.appendChild(document.createElement('p'));
      error.className = 'fetch-error';
      error.textContent = `Error! ${weatherDetails.message}`;
    } else {
      const placeTitle = weatherDiv.appendChild(document.createElement('h2'));
      placeTitle.textContent = weatherDetails.name;
      const weatherDepict = weatherDiv.appendChild(document.createElement('img'));
      weatherDepict.classList.add('weather-depict');

      const gif = weatherDetails.gify.data[Math.floor(Math.random() * 10)];
      weatherDepict.setAttribute('src', gif.images.original.url);

      const infoDiv = weatherDiv.appendChild(document.createElement('ul'));
      infoDiv.classList.add('info-div');
      const temperature = utils.createLi(infoDiv, `<b>Temperature</b>: <span class="temperature">${weatherDetails.main.temp}°C</span>`);
      const tempToggle = temperature.appendChild(document.createElement('span'));
      tempToggle.classList.add('temp-toggle');
      tempToggle.setAttribute('title', 'Toggle Temperature Unit');
      tempToggle.setAttribute('data-temp', 'C');
      tempToggle.addEventListener('click', () => {
        if (tempToggle.getAttribute('data-temp') === 'C') {
          temperature.querySelector('.temperature').innerHTML = `${utils.convertToFahrenheit(weatherDetails.main.temp)}°F`;
          tempToggle.setAttribute('data-temp', 'F');
        } else {
          temperature.querySelector('.temperature').innerHTML = `${weatherDetails.main.temp}°C`;
          tempToggle.setAttribute('data-temp', 'C');
        }
      });
      tempToggle.appendChild(document.createElement('span')).textContent = 'C';
      tempToggle.appendChild(document.createElement('span')).textContent = 'F';
      utils.createLi(infoDiv, `<b>Weather description</b>: ${weatherDetails.weather[0].description}`);
      utils.createLi(infoDiv, `<b>Wind Speed</b>: ${weatherDetails.wind.speed}m/s`);
    }
  },
  normalizeText: (text) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
  removeAccent: (chosenText) => {
    const chosenFirst = utils.normalizeText(chosenText[0]);
    const chosenLast = utils.normalizeText(chosenText[chosenText.length - 1]);
    return `${chosenFirst}, ${chosenLast}`;
  },
};

module.exports = utils;