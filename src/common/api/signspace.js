import request from 'superagent'
import Cookies from 'js-cookie'


const BASEURL = 'https://signspace.beta.tilaajavastuu.fi/api/v1/users/me/messages/'


export const makeRequest = () => {
  Cookies.set('session_id','e4618d365ec342bb8a3f5a67acf5d3df')
  // Cookies.set('session_id', 'e4618d365ec342bb8a3f5a67acf5d3df')

  return request
    .get(`${BASEURL}`)
    .withCredentials()
    .set('Access-Control-Allow-Origin', '*')
}

