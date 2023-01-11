import axios from 'axios';

// ----------------------------------------------------------------------

const axios = axios.create({

});

axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.msg) || 'مشکلی پیش امده است')
);

export default axios;
