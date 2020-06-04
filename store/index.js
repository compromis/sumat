export const state = () => ({
  form: {
    u_party: '14',
    u_type: '1',
    u_name: '',
    u_surname: '',
    collectiu: '',
    u_DNI: '',
    u_birthday: '',
    u_gender: '',
    u_address: '',
    u_city: '',
    u_postal: '',
    uacc_email: '',
    uacc_email_twice: '',
    verify_id_front: '',
    verify_id_back: ''
  },
  info: {
    collectius: [],
    sectorials: [],
    labor_codes: []
  },
  step: 1
})

export const mutations = {
  updateForm (state, payload) {
    state.form = { ...payload }
  },

  updateId (state, payload) {
    state.form.verify_id_front = payload.front
    state.form.verify_id_back = payload.back
  },

  setInfo (state, payload) {
    state.info = payload
  },

  incrementStep (state) {
    state.step++
  }
}

export const actions = {
  async getInfo ({ commit }) {
    const info = await this.$getInfo()
    commit('setInfo', info)
  }
}
