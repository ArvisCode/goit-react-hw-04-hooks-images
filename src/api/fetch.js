export default function fetchImages(query, page = 1) {
  const url = 'https://pixabay.com/api/';
  const key = '25297650-5438b7c22050d2ff2890b9a1d';
  const filter = `image_type=photo&min_width=800&orientation=horizontal&safesearch=true&per_page=12&page=${page}`;

  return fetch(`${url}?key=${key}&q=${query}&${filter}`).then(response =>
    response.json()
  );
}
