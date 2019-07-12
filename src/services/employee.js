import axios from 'axios';

const get = async url => await axios.get(url).then(resp => resp.data)

export default {
  get
}