export default function searchByName(name) {
  const baseUrl = 'https://swapi.dev/api/';
  const searchUrl = 'people/?search=';
  const response = fetch(`${baseUrl}${searchUrl}${name}`);
  response.then(data => data.json()).then(response => console.log(response));
}
