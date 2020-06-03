export const state = () => ({
  form: {
    u_name: '',
    u_surname: ''
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
