const axios = require('axios');

const api = axios.create({
  baseURL: process.env.URL_API,
  params: {
    ts: process.env.TS,
    apikey: process.env.PUBLIC_KEY,
    hash: process.env.HASH
  }
});

module.exports = api;
