const fetch = require('node-fetch');

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    place: 'seo'
  })
}

const ami = async () => {
  const resp = await fetch('https://backend.moinkhanif.dev/api/v1/weathery', options)
  const json = await resp.json();
  console.log(json)
}
ami()