const fetch = require('node-fetch');
const { removeAllChildNodes, options, showWeatherDetails } = require('./dom-utils');

const dataGrab = {
  autoComplete: async (e, instantPlace) => {
    const resp = await fetch('https://backend.moinkhanif.dev/api/v1/weathery', options({ instantPlace }));
    const json = await resp.json();
    const label = e.target.parentElement;
    const ul = label.childNodes[1];
    const cities = {};
    removeAllChildNodes(ul);
    if (json.places.error) {
      const errorLi = ul.appendChild(document.createElement('li'));
      errorLi.textContent = 'City not found!';
      errorLi.className = 'fetch-error';
      label.setAttribute('data-validity', 'false');
    } else {
      label.setAttribute('data-validity', 'true');
      json.places.forEach(place => {
        const citySelect = ul.appendChild(document.createElement('li'));
        citySelect.textContent = place.display_name;
        cities[place.display_name] = place;
        citySelect.addEventListener('click', (city) => {
          e.target.value = cities[city.target.textContent].display_name;
          removeAllChildNodes(ul);
        });
      });
    }
  },
  weatherDetails: async (weatherDiv, place) => {
    const resp = await fetch('https://backend.moinkhanif.dev/api/v1/weathery', options({ place }));
    const json = await resp.json();
    const { weatherInfo } = json;
    showWeatherDetails(weatherDiv, weatherInfo);
  },
};

module.exports = dataGrab;