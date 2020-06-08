import qs from 'qs'
import axios from 'axios'

class API {
  constructor () {
    this.apiUrl = 'https://compromis.net/espai/members/'
    this.servicesUrl = 'https://services.compromis.net/api/'
  }

  preflight (params) {
    return this._call('post', 'preflight', params)
  }

  requestSms (params) {
    return this._call('post', 'request_sms', params)
  }

  verifySms (params) {
    return this._call('post', 'verify_sms', params)
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
        if ('errors' in error.response.data) {
          reject(error.response.data)
        } else {
          alert('Error del servidor. Intenta-ho més tard o contacta amb web@compromis.net')
        }
      })
    })
  }
}

export default ({ app }, inject) => {
  const api = new API()

  inject('preflight', params => api.preflight(params))
  inject('requestSms', params => api.requestSms(params))
  inject('verifySms', params => api.verifySms(params))
  inject('attachAdditionalInfo', params => api.attachAdditionalInfo(params))
  inject('getInfo', params => api.getInfo(params))
  inject('uploadFile', (destination, data) => api.uploadFile(destination, data))
}
