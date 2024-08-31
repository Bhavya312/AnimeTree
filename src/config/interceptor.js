import axios from 'axios';

const instance = axios.create({
  baseURL: "https://kitsu.io/api/edge/anime",
  timeout: 1000,
  headers: {'Content-Type': 'application/json'}
});

//request interceptor
instance.interceptors.request.use(
  (config) => {

    return config;
  },  (error) => {

    return Promise.reject(error);
  }
)


//response interceptor
instance.interceptors.response.use(
  (response) => {

    return response;
  }, (error) => {

    return Promise.reject(error)
  }
)

export default instance