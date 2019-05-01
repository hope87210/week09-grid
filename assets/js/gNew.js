import axios from 'axios';
const apiKey = "1e88fdeac9794c8a8102f61b7deb3ff6";

export default axios.create({
  method: "get",
  baseURL: "https://newsapi.org/v2",
  params: {
    pageSize: 6
  },
  headers: {
    Authorization: apiKey
  }
});