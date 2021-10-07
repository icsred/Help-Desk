import * as axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL_HELPDESK;

export const getTickets = async () => {
  const res = await axios.get(`/api/tickets`);
  return res.data;
};
