import qs from 'qs'
import axios from 'axios'

class API {
  constructor () {
    this.apiURL = 'https://compromis.net/espai/members/'
  }

  newMember (params) {
    return this._call('post', 'new_member', params)
  }

  attachAdditionalInfo (params) {
    return this._call('post', 'additional_info', params)
  }

  getInfo () {
    return this._call('get', 'info')
  }

  _call (method, url, params) {
    const data = method === 'post' ? qs.stringify(params) : false
    const headers = method === 'post' ? { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' } : false

    return new Promise((resolve, reject) => {
      axios({
        method,
        url: this.apiURL + url,
        data,
        headers
      }).then((response) => {
        resolve(response.data)
      }).catch((error) => {
        if (error.response.status === 500) {
          reject(new Error('Error del servidor'))
        } else {
          reject(new Error(error.response.data))
        }
      })
    })
  }
}

export default ({ app }, inject) => {
  const api = new API()

  inject('newMember', params => api.newMember(params))
  inject('attachAdditionalInfo', params => api.attachAdditionalInfo(params))
  inject('getInfo', params => api.getInfo(params))
}
