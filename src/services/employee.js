import axios from 'axios';

const get = async url => await axios.get(url).then(resp => resp.data)
const post = async (url, data) => await axios.post(url, data).then(resp => resp.data)


export default {
  get,
  post
}