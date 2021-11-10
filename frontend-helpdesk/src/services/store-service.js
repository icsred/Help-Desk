import * as axios from 'axios';
//Axios me permite hacer mas sencilla la forma de comunicación entre la parte visual y la parte lógica
axios.defaults.baseURL = process.env.REACT_APP_API_URL_HELPDESK;

export const getTickets = async () => {
  const res = await axios.get(`/api/tickets`);
  return res.data;
};
