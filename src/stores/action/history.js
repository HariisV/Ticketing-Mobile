import axios from '../../utils/axios';

export const getHistory = data => {
  return {
    type: 'GETHISTORY',
    payload: axios.get(`booking?idUser=${data}`),
  };
};
