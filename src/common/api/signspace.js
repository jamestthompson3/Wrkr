import request from 'superagent'

const BASEURL = 'https://signspace.beta.tilaajavastuu.fi/api/v1/users/me/'


const makeRequest = endpoint => request
  .get(`BASEURL${endpoint}`)
