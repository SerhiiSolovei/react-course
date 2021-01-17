const getResource = async (url) => {
  const res = await fetch(url);
  const body = await res.json();
  console.log(res, body);
  return body;
}


getResource('https://swapi.dev/api/people/1')
  .then((body)=> console.log(body));
