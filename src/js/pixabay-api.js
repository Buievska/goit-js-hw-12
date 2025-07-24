import axios from 'axios';

const API_KEY = '51367924-123f738920e3f369a979532e9'; // <--- ВСТАВТЕ СЮДИ ВАШ КЛЮЧ!
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 15,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
