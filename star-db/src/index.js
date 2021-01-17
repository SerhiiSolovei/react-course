const getResource = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    console.log(`Could not fetch ${url}, received ${res.status}`);
  };

  const body = await res.json();

  return body;
}


getResource('https://swapi.dev/api/people/112323123')
  .then((body)=> console.log(body))
  .catch((err) => console.log('Could not fetch', err));
