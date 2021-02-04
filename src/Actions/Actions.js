import Axios from 'axios'

class Actions{
  getUrlData () {
    return Axios.get(`http://localhost:3004/data`);
  }
  postUrlData (data){
    return Axios.post(`http://localhost:3004/data`, data);
  }
  clearUrlData (data){
    return Axios.delete(`http://localhost:3004/data/${data}`);
  }
}

export default new Actions();