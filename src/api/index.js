import axios from 'axios';
import { LOGIN_URL, DATA_MAIL_URL, DATA_DOMAIN_URL } from './constants';

const getAuthorizationHeader = () => ({
  Authorization: `JWT ${localStorage.getItem('id_token')}`,
});

const api = {
  login: async ({ username, password }) => {
    const response = await axios.post(LOGIN_URL, { email: username, password });

    return response.data;
  },

  getMailDataLeaks: async (_, email) => {
    const response = await axios.get(DATA_MAIL_URL(email), {
      headers: getAuthorizationHeader(),
    });
    return response.data;
  },

  getDomainDataLeak: async (_, domain) => {
    const response = await axios.get(DATA_DOMAIN_URL(domain), {
      headers: getAuthorizationHeader(),
    });
    return response.data;
  },
};

export default api;
