import * as axios from 'axios';
import jwt_decode from "jwt-decode";

axios.defaults.baseURL = process.env.REACT_APP_API_URL_HELPDESK;

export const getTickets = () => {
  return axios.get(`/api/tickets`)
  .then((resp) => {
    console.log(resp.data);
  } );

}