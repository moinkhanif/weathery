import 'normalize.css';
import './css/styles.css';

const fetch = require('node-fetch');

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    place: 'seo',
  }),
};

const ami = async () => {
  const resp = await fetch('https://backend.moinkhanif.dev/api/v1/weathery', options);
  const json = await resp.json();
  console.log(json);
};

document.querySelector('.main-nav').addEventListener('click', (e) => {
  if (e.target === document.querySelector('.main-nav')) {
    e.target.querySelector('.main-nav ul').classList.toggle('nav-appear');
  }
});
