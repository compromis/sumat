export const state = () => ({
  form: {
    u_name: '',
    u_surname: '',
    verify_id_front: '',
    verify_id_back: ''
  },
  info: {
    collectius: [],
    sectorials: [],
    labor_codes: []
  }
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
  }
}

export const actions = {
  async getInfo ({ commit }) {
    const info = await this.$getInfo()
    commit('setInfo', info)
  }
}
