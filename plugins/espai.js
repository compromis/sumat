import qs from 'qs'
import axios from 'axios'

class API {
  constructor () {
    this.apiUrl = 'https://compromis.net/espai/members/'
    this.servicesUrl = 'https://services.compromis.net/api/'
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

  uploadFile (destination, data) {
    return this._call('post', 'fileupload/' + destination, data, true)
  }

  _call (method, path, params, services) {
    const data = method === 'post' && !services ? qs.stringify(params) : params
    const headers = method === 'post' && !services ? { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' } : false
    const baseUrl = services ? this.servicesUrl : this.apiUrl

    return new Promise((resolve, reject) => {
      axios({
        method,
        url: baseUrl + path,
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
  inject('uploadFile', (destination, data) => api.uploadFile(destination, data))
}
