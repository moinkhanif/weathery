const { weatherDetails, autoComplete } = require('./data-grab');
const { removeAllChildNodes, removeAccent } = require('./dom-utils');

const listeners = {
  menuListener: () => {
    document.querySelector('.main-nav').addEventListener('click', (e) => {
      if (e.target === document.querySelector('.main-nav')) {
        e.target.querySelector('.main-nav ul').classList.toggle('nav-appear');
      }
    });
  },
  searchListener: () => {
    document.querySelector('.city-search-form input[type="submit"]').addEventListener('click', (e) => {
      e.preventDefault();
      const label = document.querySelector('.city-search-form').firstChild;
      if (label.getAttribute('data-validity') === 'true') {
        const chosenText = document.querySelector('.city-search-input').value.split(', ');
        const chosenCity = removeAccent(chosenText);
        const main = document.querySelector('main');
        const weatherDiv = main.childNodes[1];
        weatherDiv.classList.add('loader');
        removeAllChildNodes(weatherDiv);
        weatherDiv.appendChild(document.createElement('div'));
        weatherDetails(weatherDiv, chosenCity);
      }
    });
  },
  inputListener: (timeout) => {
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
          autoComplete(e, word);
        }, 600);
      }
    });
  },
};

module.exports = listeners;