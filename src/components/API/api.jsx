import axios from 'axios';

const KEY = '28549780-4ce668cf7c282bb55357d4681';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function fetchImages(name,page,perPage) {
  return await axios
    .get(`?key=${KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`)
    .then(response => response.data);
}