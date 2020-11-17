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
      utils.createLi(infoDiv, `<b>Temperature</b>: ${weatherDetails.main.temp}°C`);
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