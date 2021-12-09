import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {URL_BACKEND} from '@env';
const axiosApiInterfaces = axios.create({
  baseURL: 'http://192.168.100.22:3001/',
});

const setToken = async (data, refreshToken) => {
  try {
    await AsyncStorage.setItem('token', data);
    await AsyncStorage.setItem('refreshToken', refreshToken);
  } catch (error) {
    console.log(error);
  }
};

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('refreshToken');
  } catch (error) {
    console.log(error);
  }
};

axiosApiInterfaces.interceptors.request.use(
  async function (config) {
    const token = await AsyncStorage.getItem('token');
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axiosApiInterfaces.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    if (error.response.status === 403) {
      if (error.response.data.msg === 'jwt expired') {
        axiosApiInterfaces
          .post('auth/refresh', {refreshToken})
          .then(res => {
            setToken(res.data.data.token, res.data.data.refreshToken);
          })
          .catch(err => {
            removeToken();
          });
      } else {
        removeToken();
      }
    }
    return Promise.reject(error);
  },
);

export default axiosApiInterfaces;
