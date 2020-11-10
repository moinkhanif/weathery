import 'normalize.css';
import './css/styles.css';

const fetch = require('node-fetch');

const options = (instantPlace) => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ instantPlace }),
});

const ami = async (e, word) => {
  // placeOptions.place = word;
  const resp = await fetch('https://backend.moinkhanif.dev/api/v1/weathery', options(word));
  const json = await resp.json();
  const label = e.target.parentElement;
  label.innerHTML = '';
  label.appendChild(e.target);
  const ul = label.appendChild(document.createElement('ul'));
  const cities = {};
  json.places.forEach(place => {
    const citySelect = ul.appendChild(document.createElement('li'));
    citySelect.innerHTML = place.description;
    cities[place.description] = place;
    citySelect.addEventListener('click', (city) => {
      e.target.value = cities[city.target.textContent].description;
      label.removeChild(label.childNodes[1]);
    });
  });
};

document.querySelector('.main-nav').addEventListener('click', (e) => {
  if (e.target === document.querySelector('.main-nav')) {
    e.target.querySelector('.main-nav ul').classList.toggle('nav-appear');
  }
});

let timeout;
document.querySelector('.city-search-input').addEventListener('input', (e) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    const word = e.target.value;
    if (word === '' || word.length < 2) {
      const label = e.target.parentElement;
      if (label.childNodes[1]) {
        label.removeChild(label.childNodes[1]);
      }
    } else {
      ami(e, word);
    }
  }, 1000);
});
