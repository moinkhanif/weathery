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

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const ami = async (e, word) => {
  const resp = await fetch('https://backend.moinkhanif.dev/api/v1/weathery', options(word));
  const json = await resp.json();
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
  const chosenCity = document.querySelector('.city-search-input').value;
  alert(chosenCity)
})

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
