import request from 'superagent'
import Cookies from 'js-cookie'


const BASEURL = 'https://signspace.beta.tilaajavastuu.fi/api/v1/users/me/'


export const makeRequest = endpoint => {
  // Cookies.set('session_id','e4618d365ec342bb8a3f5a67acf5d3df', { domain: 'app.signspace.com' })
  Cookies.set('name', 'e4618d365ec342bb8a3f5a67acf5d3df')
  return request
    .get(`${BASEURL}${endpoint}`)
    .set('Access-Control-Allow-Origin', '*')
}

