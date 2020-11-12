import 'normalize.css';
import './css/styles.css';

const fetch = require('node-fetch');

const tempSign = 'C';

const options = ({ instantPlace = {}, place = {} }) => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ instantPlace, place }),
});

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const showWeatherDetails = (weatherDetails) => {
  const main = document.querySelector('main');
  const weatherDiv = main.childNodes[1];
  removeAllChildNodes(weatherDiv);
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
    const li1 = infoDiv.appendChild(document.createElement('li'));
    li1.innerHTML = `<b>Temperature</b>: ${weatherDetails.main.temp}°${tempSign}`;
    const li2 = infoDiv.appendChild(document.createElement('li'));
    li2.innerHTML = `<b>Weather description</b>: ${weatherDetails.weather[0].description}`;
    const li3 = infoDiv.appendChild(document.createElement('li'));
    li3.innerHTML = `<b>Wind Speed</b>: ${weatherDetails.wind.speed}m/s`;
  }
};

const weatherDetails = async (place) => {
  const resp = await fetch('https://backend.moinkhanif.dev/api/v1/weathery', options({ place }));
  const json = await resp.json();
  const { weatherInfo } = json;
  showWeatherDetails(weatherInfo);
};

const ami = async (e, instantPlace) => {
  const resp = await fetch('https://backend.moinkhanif.dev/api/v1/weathery', options({ instantPlace }));
  const json = await resp.json();
  console.log(json);
  const label = e.target.parentElement;
  const ul = label.childNodes[1];
  const cities = {};
  removeAllChildNodes(ul);
  json.places.forEach(place => {
    const citySelect = ul.appendChild(document.createElement('li'));
    citySelect.innerHTML = place.display_name;
    cities[place.display_name] = place;
    citySelect.addEventListener('click', (city) => {
      e.target.value = cities[city.target.textContent].display_name;
      removeAllChildNodes(ul);
    });
  });
};

document.querySelector('.main-nav').addEventListener('click', (e) => {
  if (e.target === document.querySelector('.main-nav')) {
    e.target.querySelector('.main-nav ul').classList.toggle('nav-appear');
  }
});

document.querySelector('.city-search-form input[type="submit"]').addEventListener('click', (e) => {
  e.preventDefault();
  const chosenText = document.querySelector('.city-search-input').value.split(', ');
  const chosenFirst = chosenText[0].normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const chosenLast = chosenText[chosenText.length - 1].normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const chosenCity = `${chosenFirst}, ${chosenLast}`;
  weatherDetails(chosenCity);
});

let timeout;
document.querySelector('.city-search-input').addEventListener('input', (e) => {
  clearTimeout(timeout);
  const label = e.target.parentElement;
  const ul = label.childNodes[1];
  const word = e.target.value;
  removeAllChildNodes(ul);
  if (word !== '' && word.length >= 2) {
    const iniLi = ul.appendChild(document.createElement('li'));
    iniLi.classList.add('loader');
    iniLi.appendChild(document.createElement('div'));
    timeout = setTimeout(() => {
      ami(e, word);
    }, 600);
  }
});
