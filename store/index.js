export const state = () => ({
  form: {
    u_name: '',
    u_surname: ''
  }
})

export const mutations = {
  updateForm (state, payload) {
    state.form = { ...payload }
  }
}
