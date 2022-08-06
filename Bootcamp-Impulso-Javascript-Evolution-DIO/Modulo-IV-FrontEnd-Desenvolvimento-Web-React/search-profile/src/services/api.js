import axios from  'axios';

// Criando instância do axios
const api = axios.create({
  baseURL: "htps:// api.github.com/"
});

export default api;