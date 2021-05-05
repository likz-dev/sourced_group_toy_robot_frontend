import axios from 'axios'

export const BASE_URL = process.env.API_URL || 'http://localhost:5000'

let headers = {
  'Content-Type': 'application/json'
}

const api = {
  apiAction(method, url, config) {
    return new Promise((resolve, reject) => {
      const actionObj = Object.assign({
        method,
        url: `${BASE_URL}${url}`,
        headers
      }, config)
      console.log(actionObj)
      axios(actionObj)
        .then((response) => {
          resolve(Object.assign({success: true}, response))
        })
        .catch((err) => {
          console.log('rejecting...')
          console.log(err)
          reject(Object.assign({success: false}, err.response))
        })
    })
  },

  setToken(token) {
    console.log(`settings api token is ${token}`)
    headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  },

  get(url, params = {}) {
    return this.apiAction('get', url, {params})
  },

  post(url, data) {
    return this.apiAction('post', url, {data})
  },

  delete(url, data) {
    return this.apiAction('delete', url, {data})
  }
}

export default api
