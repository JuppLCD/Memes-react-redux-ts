const URL_BACKEND = import.meta.env.VITE_HOST_BAKEND;

const URL_API_BACKEND = URL_BACKEND + '/api/v1';
const LOCAL_STORAGE_KEY_TOKEN = 'accessToken';

const API_MEMES_TEMPLATE_IMG = 'https://i.imgflip.com';
const API_MEMES_TEMPLATE_MEMES = ' https://api.imgflip.com/get_memes';

export { URL_BACKEND, URL_API_BACKEND, LOCAL_STORAGE_KEY_TOKEN, API_MEMES_TEMPLATE_IMG, API_MEMES_TEMPLATE_MEMES };
