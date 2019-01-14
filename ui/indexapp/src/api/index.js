import Vue from 'vue'
import Axios from 'axios'
import Constants from '../config/constants'

const Api = {
  init () {
    Vue.use(Axios)
    this.axios = Axios.create({
      baseURL: Constants.URL.BASE_URL,
      withCredentials: false,
      timeout: 10000,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  },

  request (params) {
    return new Promise((resolve, reject) => {
      const requestParams = Object.assign({}, params)
      requestParams.method = requestParams.method || 'GET';
      this.axios(requestParams).then((response) => {
        resolve(response.data)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}

export default Api
